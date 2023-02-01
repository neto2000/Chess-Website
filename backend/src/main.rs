use axum::{routing::get, Router};
use std::net::SocketAddr;

#[tokio::main]
async fn main()
{
    let app = Router::new().route("/api", get(handler));

    let addr = SocketAddr::from(([127,0,0,1], 9000));

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
    
}

async fn handler() -> &'static str {
    "Hello World!"
}