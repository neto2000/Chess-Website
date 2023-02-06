import React, { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"


let new_content = []

let figure_dict;


function App() {

	useEffect(() => {

		console.log("Get Figure Dict")

		Get_Figure_Dict();

	}, [])


	// create content State with empty HTML tag
	for(let j = 1; j <= 64; j++)
	{
		new_content.push({id: j,html:[<></>]})
	}

	const [content, setContent] = useState(new_content);


	// create chess board 8x8
	let chess_board = []

	let counter = 0;


	for(let i = 1; i <= 64; i++)
	{
		

		if(counter % 2 == 0)
		{
			chess_board.push((
				<div className="square-even" key={i}>
					{content[i-1].html}
				</div>
			));
		}
		else
		{
			chess_board.push((
				<div className="square-odd" key={i}>
					{content[i-1].html}
				</div>
			));
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

	

	function PlaceFigure(field_pos, type)
	{
		const new_content = [...content]

		const new_html = new_content.find(item => item.id === field_pos)

		new_html.html = [
		<button className='figure-button' onClick={PlaceHighlights.bind(this, field_pos, type)}>
			<img className='figure-image' src='/images/Bauer.svg'></img>
		</button>

		];

		setContent(new_content);

	}

	
	function PlaceHighlights(old_pos, type)
	{

		console.log(figure_dict)

		// Place all Highlights with the specifications of the type
		const new_content = [...content]

		const calc_dict = {"n": -8, "ne": -7, "e": 1, "se": 9, "s": 8, "sw": 7, "w": -1, "nw": -9}

		
        let this_figure_dict = figure_dict[type]
		
        let auto_fill = figure_dict["auto-fill"];
		
        // spawn the highlight of all possible moves
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
						
						const current_highlight_pos = this_figure_dict[key] * calc_dict[key] + old_pos;

                        console.log(current_highlight_pos);

                        const new_html = new_content.find(item => item.id === current_highlight_pos)


						// check if a figure is on the field
						if (new_html.html[0].type == "button")
						{
							new_html.html = [
								<button className='figure-button' onClick={MoveToField.bind(this, old_pos, current_highlight_pos, type)}>
									
									<img className='highlight-image' src='/images/highlight.svg'></img>
									
									<img className='figure-image' src='/images/Bauer.svg'></img>
								</button>
						
							];
						}
						else
						{

							new_html.html.push(
							<button className='highlight-button'  onClick={MoveToField.bind(this, old_pos, current_highlight_pos, type)}>
								<img className='highlight-image' src='/images/highlight.svg'></img>
							</button>);
						}
                    }

                }
            }
        }


		


		setContent(new_content);
	}

	function MoveToField(old_pos, field_pos, type)
	{
		console.log("Move")

	}

	async function Get_Figure_Dict()
	{
		const promise = await fetch("/dict", {
			method: "get"
		})
	
		const data = await promise.json();
	
		figure_dict = data;    
	}

	return (
		<div className="App">
			<div className="board-container">
				<div className="chess-board">
					{chess_board}
				</div>

			</div>
			<button onClick={PlaceFigure.bind(this, 10, "pawn")}>Place</button>
		</div>
	)
}

export default App
