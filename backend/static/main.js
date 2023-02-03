
function CreateChessBoard()
{
    let chess_board = document.getElementById("chess-board");

    
    let counter = 0;

    for (let i = 1; i <= 64; i++)
    {

        console.log(counter);

        if (counter % 2 == 0)
        {
            let square_even = document.createElement("div");

            square_even.id = "field" + i;

            square_even.className = "square-even";

            chess_board.appendChild(square_even);
        }
        else
        {
            let square_odd = document.createElement("div");

            square_odd.id = "field" + i;

            square_odd.className = "square-odd";

            chess_board.appendChild(square_odd);
        }

        if (i % 8 == 0)
        {
            if(i != 0)
            {

                counter++;
            }
        }
       


        counter++;
    }
}

function Place_Figure(image, position)
{
    let field = document.getElementById("field" + position);

    let figure = document.createElement("button");

    figure.className = "but";


    let image_element = document.createElement("img");
    image_element.className = "figure-image";
    image_element.setAttribute('src', image);

    figure.appendChild(image_element);

    field.appendChild(figure);
}



async function Click()
{
    let data = await Get_Checklist_Data();

    console.log(data);
}



//simple GET request
async function Get_Checklist_Data()
{

    const response = await fetch("http://127.0.0.1:9000/api", {
        method: "get"
    })

    const data = await response.json()

    return data
}

window.onload = function(){ 
    // document.getElementById("test-button").onclick = Click

    CreateChessBoard();

    Place_Figure("./images/Bauer.svg", 3);
    Place_Figure("./images/Bauer.svg", 20);
};