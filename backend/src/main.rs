use axum::{
    routing::{get, post, get_service},
    http::StatusCode,
    extract::{
        ws::{Message, WebSocket, WebSocketUpgrade},
        
    },
    response::IntoResponse,
    Json,
    Router};


use std::net::SocketAddr;
use tower_http::services::{ServeDir, ServeFile};

use serde::{Deserialize, Serialize};
use serde_json::{json};

use std::{io};

#[tokio::main]
async fn main()
{
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
    .route("/ws", get(ws_handler));





    let addr = SocketAddr::from(([127,0,0,1], 9000));

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
    
}

async fn ws_handler(
    ws: WebSocketUpgrade,
) -> impl IntoResponse 
{
    println!("start");

    ws.on_upgrade(move |socket| handle_socket(socket))
}

async fn handle_socket(mut socket: WebSocket)
{
    if let Some(msg) = socket.recv().await
    {
        if let Ok(msg) = msg {
            println!("Message: {:?}", msg);
        }
        else
        {
            println!("failed!");
            return ;
        }
    }
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