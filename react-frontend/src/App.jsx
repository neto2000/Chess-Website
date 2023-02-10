import React, { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"


let new_content = []

let figure_dict;

let active_figure = 0;


function App() {

	useEffect(() => {

		console.log("Get Figure Dict")

		Get_Figure_Dict();

	}, [])


	// create content State with empty HTML tag
	for(let j = 1; j <= 64; j++)
	{
		new_content.push({id: j,html:[<></>], type: "none", is_highlight: false})
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
		<button className='figure-button' onClick={PlaceHighlights.bind(this, field_pos)}>
			<img className='figure-image' src='/images/Bauer.svg'></img>
		</button>

		];

		new_html.type = type

		console.log(new_html.type)

		setContent(new_content);

	}

	
	function PlaceHighlights(old_pos)
	{
		// activefigure: the figure from where the last highlights were spawned
		// so the will not be spawned twice!
		if (active_figure == old_pos)
		{
			console.log("again")
		}
		else
		{
			// Place all Highlights with the specifications of the type
			const new_content = [...content]
	
			const calc_dict = {"n": -8, "ne": -7, "e": 1, "se": 9, "s": 8, "sw": 7, "w": -1, "nw": -9}
	
			
			let this_figure_dict = figure_dict[content[old_pos - 1].type]
			
			let auto_fill = this_figure_dict["auto-fill"];
	
			console.log(auto_fill)
			
			// spawn the highlight of all possible moves
			for (let key in this_figure_dict)
			{
				if(key != "start-pos" && key != "image" && key != "auto-fill")
				{
					if(auto_fill)
					{
						if (this_figure_dict[key] != 0)
						{
	
							for(let i = 1; i <= this_figure_dict[key]; i++)
							{
								const current_highlight_pos = i * calc_dict[key] + old_pos;
	
								// test if highlight is out of border
								if(current_highlight_pos < 1 || current_highlight_pos > 64)
								{
									continue
								}
	
								// check that there is no row overflow by east and west direction
								if(key == "e" || key == "w")
								{
	
									// MAth.floor rundet immer ab!
									if(Math.floor(old_pos / 8) != Math.floor(current_highlight_pos / 8))
									{
										if(current_highlight_pos % 8 != 0)
										{
											continue
										}
									}
									else if(current_highlight_pos % 8 == 0)
									{
										continue
									}
								}
	
								if(key == "ne" || key == "se" || key == "sw" || key == "nw")
								{
									console.log(current_highlight_pos % 8)
	
									if(current_highlight_pos % 8 == 0 ||current_highlight_pos % 8 == 1)
									{
										const new_html = new_content.find(item => item.id === current_highlight_pos)
	
	
										// check if a figure is on the field
										if (new_html.html[0].type == "button")
										{
											new_html.html = [
												<button className='figure-button' onClick={MoveToField.bind(this, old_pos, current_highlight_pos)}>
													
													<img className='highlight-image' src='/images/highlight.svg'></img>
													
													<img className='figure-image' src='/images/Bauer.svg'></img>
												</button>
										
											];
										}
										else
										{
	
											new_html.html.push(
											<button className='highlight-button'  onClick={MoveToField.bind(this, old_pos, current_highlight_pos)}>
												<img className='highlight-image' src='/images/highlight.svg'></img>
											</button>);
										}
	
										new_html.is_highlight = true;
	
	
										break
									}
								}
	
	
								const new_html = new_content.find(item => item.id === current_highlight_pos)
	
	
								// check if a figure is on the field
								if (new_html.html[0].type == "button")
								{
									new_html.html = [
										<button className='figure-button' onClick={MoveToField.bind(this, old_pos, current_highlight_pos)}>
											
											<img className='highlight-image' src='/images/highlight.svg'></img>
											
											<img className='figure-image' src='/images/Bauer.svg'></img>
										</button>
								
									];
								}
								else
								{
									console.log("one time")
	
									new_html.html.push(
									<button className='highlight-button'  onClick={MoveToField.bind(this, old_pos, current_highlight_pos)}>
										<img className='highlight-image' src='/images/highlight.svg'></img>
									</button>);
								}
	
								new_html.is_highlight = true;
							}
						}
					}
					else
					{
						
						if (this_figure_dict[key] != 0)
						{
							
							const current_highlight_pos = this_figure_dict[key] * calc_dict[key] + old_pos;
	
							if(current_highlight_pos < 1 || current_highlight_pos > 64)
							{
								continue
							}
	
							const new_html = new_content.find(item => item.id === current_highlight_pos)
	
	
							// check if a figure is on the field
							if (new_html.html[0].type == "button")
							{
								new_html.html = [
									<button className='figure-button' onClick={MoveToField.bind(this, old_pos, current_highlight_pos)}>
										
										<img className='highlight-image' src='/images/highlight.svg'></img>
										
										<img className='figure-image' src='/images/Bauer.svg'></img>
									</button>
							
								];
							}
							else
							{
	
								new_html.html.push(
								<button className='highlight-button'  onClick={MoveToField.bind(this, old_pos, current_highlight_pos)}>
									<img className='highlight-image' src='/images/highlight.svg'></img>
								</button>);
							}
	
							new_html.is_highlight = true;
						}
	
					}
				}
			}
		}



		setContent(new_content);

		active_figure = old_pos;
	}

	function MoveToField(old_pos, new_pos)
	{
		console.log("Move")

		for(let i = 1; i <= 64; i++)
		{

			// remove all path highlights
			if (content[i - 1].is_highlight)
			{
				const new_content = [...content]

				const new_html = new_content.find(item => item.id === i)

				if(new_html.type == "none")
				{
					new_html.html = [<></>]
				}
				else
				{
					new_html.html = [
						<button className='figure-button' onClick={PlaceHighlights.bind(this, new_pos)}>
							<img className='figure-image' src='/images/Bauer.svg'></img>
						</button>				
					];
				}
				setContent(new_content);
			}		
		}

		const new_content = [...content]

		const new_html = new_content.find(item => item.id === new_pos)
		
		new_html.html = [
			<button className='figure-button' onClick={PlaceHighlights.bind(this, new_pos)}>
				<img className='figure-image' src='/images/Bauer.svg'></img>
			</button>				
		];

		new_html.type = content[old_pos - 1].type;

		const old_html = new_content.find(item => item.id === old_pos)

		old_html.html = [<></>];

		old_html.type = "none";

		setContent(new_content);

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
			<button onClick={PlaceFigure.bind(this, 28, "rook")}>Place</button>
		</div>
	)
}

export default App
