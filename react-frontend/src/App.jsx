import React, { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"


let new_content = []

let figure_dict;

let active_figure = 0;

let own_team;
let enemy_team;


function App() {

	useEffect(() => {

		console.log("Get Figure Dict")

		Get_Figure_Dict();

		SetTeams();

	}, [])


	// create content State with empty HTML tag
	for(let j = 1; j <= 64; j++)
	{
		new_content.push({id: j,html:[<></>], type: "none", is_highlight: false, team: "none", is_first_move: true})
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


	function SetTeams()
	{
		own_team = "black"

		enemy_team = "white"
	}

	

	function PlaceFigure(field_pos, type, team)
	{
		const new_content = [...content]

		const new_html = new_content.find(item => item.id === field_pos)

		new_html.html = [
		<button className='figure-button' onClick={PlaceHighlights.bind(this, field_pos)}>
			<img className='figure-image' src='/images/Bauer.svg'></img>
		</button>

		];

		new_html.type = type
		new_html.team = team

		console.log(new_html.type)
		console.log(new_html.team)

		setContent(new_content);

	}

	
	function PlaceHighlights(figure_pos)
	{
		console.log(figure_pos)
		
		const new_content = [...content]
		
		for(let i = 1; i <= 64; i++)
		{

			// remove all path highlights
			if (content[i - 1].is_highlight)
			{
				console.log("highlight")


				const new_html_test = new_content.find(item => item.id === i)

				if(new_html_test.type == "none")
				{
					new_html_test.html = [<></>]

					console.log("none")
				}
				else
				{
					new_html_test.html = [
						<button className='figure-button' onClick={PlaceHighlights.bind(this, new_html_test.id)}>
							<img className='figure-image' src='/images/Bauer.svg'></img>
						</button>				
					];
				}

				new_html_test.is_highlight = false;

			}		
		}

		

		// activefigure: the figure from where the last highlights were spawned
		// so the will highlights not be spawned twice!
		if (active_figure == figure_pos)
		{
			console.log("again")


		
		}
		else
		{
			// Place all Highlights with the specifications of the type
	
			const calc_dict = {"n": -8, "ne": -7, "e": 1, "se": 9, "s": 8, "sw": 7, "w": -1, "nw": -9}
	
			
			let this_figure_dict = figure_dict[content[figure_pos - 1].type]
			
			let auto_fill = this_figure_dict["auto-fill"];

			
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
								const current_highlight_pos = i * calc_dict[key] + figure_pos;

								
								// test if highlight is out of border
								if(current_highlight_pos < 1 || current_highlight_pos > 64)
								{
									continue
								}

								// continue when the highlight is on your own figures so you cant beat your own figures
								if(content[figure_pos - 1].team == content[current_highlight_pos - 1].team)
								{
									console.log(content[figure_pos - 1].team)

									break
								}
								// check that there is no row overflow by east and west direction
								if(key == "e" || key == "w")
								{
	
									// MAth.floor rundet immer ab!
									if(Math.floor(figure_pos / 8) != Math.floor(current_highlight_pos / 8))
									{
										if(figure_pos % 8 == 0 && current_highlight_pos < figure_pos && current_highlight_pos % 8 != 0)
										{
											
										}
										else if(current_highlight_pos % 8 != 0)
										{
											continue
										}
										else if(figure_pos % 8 == 0 && current_highlight_pos % 8 == 0)
										{
											continue
										}
										
									}
									else if(current_highlight_pos % 8 == 0 || figure_pos % 8 == 0)
									{
										continue
									}
								}
	
								if(key == "ne" || key == "se" || key == "sw" || key == "nw")
								{
									if(figure_pos % 8 == 0)
									{
										if(key == "ne" || key == "se")
										{
											continue
										}
									}
									else if(figure_pos % 8 == 1)
									{
										if(key == "nw" || key == "sw")
										{
											continue
										}
									}

	
									if(current_highlight_pos % 8 == 0 ||current_highlight_pos % 8 == 1)
									{
										const new_html = new_content.find(item => item.id === current_highlight_pos)
	
	
										// check if a figure is on the field
										if (new_html.html[0].type == "button")
										{
											new_html.html = [
												<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, current_highlight_pos)}>
													
													<img className='highlight-image' src='/images/highlight.svg'></img>
													
													<img className='figure-image' src='/images/Bauer.svg'></img>
												</button>
										
											];
										}
										else
										{
	
											new_html.html.push(
											<button className='highlight-button'  onClick={MoveToField.bind(this, figure_pos, current_highlight_pos)}>
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
										<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, current_highlight_pos)}>
											
											<img className='highlight-image' src='/images/highlight.svg'></img>
											
											<img className='figure-image' src='/images/Bauer.svg'></img>
										</button>
								
									];
								}
								else
								{
									new_html.html.push(
									<button className='highlight-button'  onClick={MoveToField.bind(this, figure_pos, current_highlight_pos)}>
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
							
							const current_highlight_pos = this_figure_dict[key] * calc_dict[key] + figure_pos;
	
							if(current_highlight_pos < 1 || current_highlight_pos > 64)
							{
								continue
							}

							// continue when the highlight is on your own figures so you cant beat your own figures
							if(content[figure_pos - 1].team == content[current_highlight_pos - 1].team)
							{
								console.log(content[figure_pos - 1].team)

								continue
							}

							// on start the pawn can move 2 fields

							if(content[figure_pos - 1].is_first_move && content[figure_pos - 1].type == "pawn")
							{
								let second_highlight_pawn_pos = current_highlight_pos - 8;

								if(second_highlight_pawn_pos > 0 && content[figure_pos - 1].team != content[second_highlight_pawn_pos - 1].team)
								{
									const second_highlight = new_content.find(item => item.id === second_highlight_pawn_pos)

									// check if a figure is on the field
									if (second_highlight.html[0].type == "button")
									{
										second_highlight.html = [
											<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, second_highlight_pawn_pos)}>
												
												<img className='highlight-image' src='/images/highlight.svg'></img>
												
												<img className='figure-image' src='/images/Bauer.svg'></img>
											</button>
									
										];
									}
									else
									{
			
										second_highlight.html.push(
										<button className='highlight-button'  onClick={MoveToField.bind(this, figure_pos, second_highlight_pawn_pos)}>
											<img className='highlight-image' src='/images/highlight.svg'></img>
										</button>);
									}
			
									second_highlight.is_highlight = true;
								}
							}

							if(content[figure_pos - 1].type == "pawn")
							{
								if(content[current_highlight_pos - 1].team != "none")
								{
									continue
								}

								let pawn_beat_point1 = figure_pos - 9;
								let pawn_beat_point2 = figure_pos - 7; 

								console.log("team: " + content[pawn_beat_point2 - 1].team)

								if(content[pawn_beat_point1 - 1].team == enemy_team)
								{
									const pawn_beat1 = new_content.find(item => item.id === pawn_beat_point1)

									pawn_beat1.html = [
										<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, pawn_beat_point1)}>
											
											<img className='highlight-image' src='/images/highlight.svg'></img>
											
											<img className='figure-image' src='/images/Bauer.svg'></img>
										</button>
								
									];

									pawn_beat1.is_highlight = true;
								}

								if(content[pawn_beat_point2 - 1].team == enemy_team)
								{
									const pawn_beat2 = new_content.find(item => item.id === pawn_beat_point2)

									pawn_beat2.html = [
										<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, pawn_beat_point2)}>
											
											<img className='highlight-image' src='/images/highlight.svg'></img>
											
											<img className='figure-image' src='/images/Bauer.svg'></img>
										</button>
								
									];

									pawn_beat2.is_highlight = true;
								}
							}

	
							const new_html = new_content.find(item => item.id === current_highlight_pos)
	
	
							// check if a figure is on the field
							if (new_html.html[0].type == "button")
							{
								new_html.html = [
									<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, current_highlight_pos)}>
										
										<img className='highlight-image' src='/images/highlight.svg'></img>
										
										<img className='figure-image' src='/images/Bauer.svg'></img>
									</button>
							
								];
							}
							else
							{
	
								new_html.html.push(
								<button className='highlight-button'  onClick={MoveToField.bind(this, figure_pos, current_highlight_pos)}>
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

		active_figure = figure_pos;
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
						<button className='figure-button' onClick={PlaceHighlights.bind(this, new_html.id)}>
							<img className='figure-image' src='/images/Bauer.svg'></img>
						</button>				
					];
				}

				new_html.is_highlight = false;

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
		new_html.team = content[old_pos - 1].team;
		new_html.is_first_move = false;

		const old_html = new_content.find(item => item.id === old_pos)

		old_html.html = [<></>];

		old_html.type = "none";

		old_html.team = "none"

		old_html.is_first_move = false;

		setContent(new_content);

	}

	function TestPlace()
	{
		//PlaceFigure(28, "rook");
		PlaceFigure(45, "bishop")
	}

	function StartPlaceOwnFigures()
	{
		for(let pawn_field = 49; pawn_field <= 56; pawn_field++)
		{
			PlaceFigure(pawn_field, "pawn", "black")
		}

		PlaceFigure(57, "rook", "black");
		PlaceFigure(58, "knight", "black");
		PlaceFigure(59, "bishop", "black");
		PlaceFigure(60, "king", "black");
		PlaceFigure(61, "queen", "black");
		PlaceFigure(62, "bishop", "black");
		PlaceFigure(63, "knight", "black");
		PlaceFigure(64, "rook", "black");

		PlaceFigure(27, "rook", "white");

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
			<button onClick={StartPlaceOwnFigures}>Place</button>
		</div>
	)
}

export default App
