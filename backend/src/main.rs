use axum::{
    routing::{get, post, get_service},
    http::StatusCode,
    extract::{
        ws::{Message, WebSocket, WebSocketUpgrade},
        State,
    },
    response::Response,
    response::IntoResponse,
    Json,
    Router};
use tokio::stream;
use tokio::sync::broadcast;

use futures::{stream::StreamExt, sink::SinkExt};

use std::{net::SocketAddr, sync::Arc, sync::Mutex};
use tower_http::services::{ServeDir, ServeFile};

use serde::{Deserialize, Serialize};
use serde_json::{json};

use std::{io};



struct AppState {
    tx: broadcast::Sender<String>,
    black: Arc<Mutex<bool>>,
    white: Arc<Mutex<bool>>,
}


#[tokio::main]
async fn main()
{

    let (tx, _rx) = broadcast::channel(100);

    let white = Arc::new(Mutex::new(false.to_owned()));
    let black = Arc::new(Mutex::new(false.to_owned()));

    let app_state = Arc::new(AppState{tx, black, white});


    let app = Router::new()
    .nest_service("/", get_service(ServeDir::new("static/frontend"))
        .handle_error(|error: io::Error| async move { 
        ( 
        StatusCode::INTERNAL_SERVER_ERROR, 
        format!("Unhandled internal error: {}", error),
        )
    }))
    .nest_service("/images", get_service(ServeDir::new("static/images"))
        .handle_error(|error: io::Error| async move { 
        ( 
        StatusCode::INTERNAL_SERVER_ERROR, 
        format!("Unhandled internal error: {}", error),
        )
    }))

    .route("/api", get(handler))
    .route("/dict", get(get_figure_dict))
    .route("/ws", get(ws_handler))
    .with_state(app_state);





    let addr = SocketAddr::from(([127,0,0,1], 9000));

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
    
}

async fn ws_handler(
    ws: WebSocketUpgrade,
    State(state): State<Arc<AppState>>,
) -> impl IntoResponse 
{
    println!("start");

    ws.on_upgrade(|socket| handle_socket(socket, state))
}

async fn handle_socket(mut socket: WebSocket, state: Arc<AppState>)
{
    let (mut sender, mut receiver) = socket.split();

    let mut rx = state.tx.subscribe();


    let mut send_task = tokio::spawn(async move{
        while let Ok(msg) = rx.recv().await {
            if sender.send(Message::Text(msg)).await.is_err() 
            {
                break;
            }
        }
    });

    let tx = state.tx.clone();

    let mut recv_task = tokio::spawn(async move{

        while let Some(Ok(Message::Text(message))) = receiver.next().await 
        {   
            if message == "which team"
            {

                let mut msg = String::from("none");

                let mut black = state.black.lock().unwrap();
                let mut white = state.white.lock().unwrap();
                

                if *black == false
                {

                    *black = true.to_owned();

                    msg = String::from("black");
                }
                else if *white == false
                {
                    msg = String::from("white");

                    *white = true.to_owned();
                }

                println!("msg: {}", msg);

                let _ = tx.send(msg);
            }
            else
            {

                println!("message: {}" , message);
        
                let msg = message;
                
                let _ = tx.send(msg);
            }

            
        }
    });

    tokio::select! {
        _ = (&mut send_task) => recv_task.abort(),
        _ = (&mut recv_task) => send_task.abort(),
    };


}


async fn get_figure_dict() -> impl IntoResponse
{

    // n, ne, e, ... stands for the cardinal points: north, north-east, east, ...
    // the value stands for how long you can move in the direction (8 stands for over the complete field)

    // auto-fill = true : you can move to all fields between the limit value and your position (eg. queen)
    // auto-fill = false : you can only move to the point (eg. knight)

    //every special move is hard coded into JavaScript

    let pawn = json!({"start-pos": 5, "image": "./images/Bauer.svg", "n":1, "ne":0, "e":0,"se":0,"s":0,"sw":0,"w":0,"nw":0 , "auto-fill":false});

    let queen = json!({"start-pos": 5, "image": "./images/Bauer.svg", "n":8, "ne":8, "e":8,"se":8,"s":8,"sw":8,"w":8,"nw":8 , "auto-fill":true});

    let king = json!({"start-pos": 5, "image": "./images/Bauer.svg", "n":1, "ne":1, "e":1,"se":1,"s":1,"sw":1,"w":1,"nw":1 , "auto-fill":false});

    let bishop = json!({"start-pos": 5, "image": "./images/Bauer.svg", "n":0, "ne":8, "e":0,"se":8,"s":0,"sw":8,"w":0,"nw":8 , "auto-fill":true});


    // !! implement that it is not 2 in one direction but two in the direction and 1 left and right (in JS) !!
    let knight = json!({"start-pos": 5, "image": "./images/Bauer.svg", "n":2, "ne":0, "e":2,"se":0,"s":2,"sw":0,"w":2,"nw":0 , "auto-fill":false});

    let rook = json!({"start-pos": 5, "image": "./images/Bauer.svg", "n":8, "ne":0, "e":8,"se":0,"s":8,"sw":0,"w":8,"nw":0 , "auto-fill":true});

    (StatusCode::OK, Json(json!({"pawn": pawn, "king": king, "queen": queen, "bishop": bishop, "knight": knight, "rook": rook})))
}

async fn handler() -> impl IntoResponse {

    let hello = String::from("Hello World from the backend!");

    (StatusCode::OK, Json(json!({"message": hello})))
}