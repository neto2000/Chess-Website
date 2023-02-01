use yew::prelude::*;

use gloo_net::http::Request;

use serde::{Serialize, Deserialize};


async fn lol() -> String
{
    let get_var = Request::get("http://127.0.0.1:9000") 
        .send()
        .await
        .unwrap();

    let get_var = get_var.json().await;

    let str_get_var = serde_json::from_string(&get_var).unwrap();

    return get_var;
}

#[function_component(App)]
fn app() -> Html {

    let test = use_state(|| "Hi");

    let get_request = {

        let test = test.clone();
        Callback::from(move |_|
        {
            


            test.set(get_var)
    
        })
    };
    

    html! {

        <button onclick= {get_request}> {*test} </button>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}