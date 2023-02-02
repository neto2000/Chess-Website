use axum::{
    routing::{get, post, get_service},
    http::StatusCode,
    response::IntoResponse,
    Json,
    Router};


use std::net::SocketAddr;
use tower_http::services::ServeFile;

use serde::{Deserialize, Serialize};
use serde_json::{json};

use std::{io};

#[tokio::main]
async fn main()
{
    let app = Router::new()
    .route("/api", get(handler))
    .route("/", get_service(ServeFile::new("static/index.html"))
        .handle_error(|error: io::Error| async move { 
        ( 
        StatusCode::INTERNAL_SERVER_ERROR, 
        format!("Unhandled internal error: {}", error),
        )
    }));





    let addr = SocketAddr::from(([127,0,0,1], 9000));

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
    
}

async fn handler() -> impl IntoResponse {

    let hello = String::from("Hello World from the backend!");

    (StatusCode::OK, Json(json!({"message": hello})))
}