

let figure_dict


function CreateChessBoard()
{
    let chess_board = document.getElementById("chess-board");

    
    let counter = 0;

    for (let i = 1; i <= 64; i++)
    {

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

function Place_Figure(type, position)
{

    
    let field = document.getElementById("field" + position);
    
    let figure = document.createElement("button");

    figure.onclick = function()
    {


        let prev_highlights = document.getElementsByClassName("highlight-button");

        for (let i = 0; i < prev_highlights.length; i++)
        {
            prev_highlights[i].remove();
        }


        calc_dict = {"n": -8, "ne": -7, "e": 1, "se": 9, "s": 8, "sw": 7, "w": -1, "nw": -9}


        // spawn the highlight of all possible moves

        let this_figure_dict = figure_dict[type]

        let auto_fill = figure_dict["auto-fill"];

        for (let key in this_figure_dict)
        {
            if(key != "start-pos" && key != "image" && key != "auto-fill")
            {
                if(auto_fill)
                {

                }
                else
                {
                    
                    
                    if (this_figure_dict[key] != 0)
                    {
                        console.log(this_figure_dict[key] * calc_dict[key] + position);

                        Place_Highlight(calc_dict[key] * this_figure_dict[key] + position, position);
                    }

                }
            }
        }
    }
    
    figure.className = "figure-button";
    // figure.id = "figure"
    
    
    let image_element = document.createElement("img");
    image_element.className = "figure-image";
    image_element.setAttribute('src', figure_dict[type]["image"]);
    
    figure.appendChild(image_element);
    
    field.appendChild(figure);
}

function Place_Highlight(position, old_position)
{

    if(position > 0)
    {

        let highlight_field = document.getElementById("field" + position);

        if(highlight_field.firstElementChild == null)
        {

            let highlight_button = document.createElement("button");
            highlight_button.className = "highlight-button";
        
            let highlight = document.createElement("img");
        
            highlight.className = "highlight-image";
            highlight.setAttribute('src', "/images/highlight.svg");
        
            
        
            highlight_button.appendChild(highlight);
        
            highlight_field.appendChild(highlight_button);
        }
    
    }

}



//simple GET request
async function Get_Figure_Dict()
{

    const promise = await fetch("/dict", {
        method: "get"
    })

    const data = await promise.json();

    figure_dict = data;    
    

}

window.onload = async function(){ 

    await Get_Figure_Dict(); 
    CreateChessBoard();

    console.log(figure_dict);

    Place_Figure("pawn", 33);
    Place_Figure("pawn", 20);
};