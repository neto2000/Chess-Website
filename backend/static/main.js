
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



async function Click()
{
    let data = await Get_Checklist_Data();

    console.log(data);
}


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
};