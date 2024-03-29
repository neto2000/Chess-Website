import React, { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"


let new_content = []

let figure_dict;

let active_figure = 0;
let highlights_active = false;

let own_team;
let enemy_team;

let king_position = 0;


let your_turn = false;

let your_image_dir;

let enemy_image_dir;


// start websocket
const websockett = new WebSocket("ws://127.0.0.1:9000/ws");

websockett.onopen = () => {
	console.log("websocket opened");
}




function App() {

	useEffect(() => {


		(async () => {

			await Get_Figure_Dict();
			await SetTeams();
			StartPlaceOwnFigures();
			
		})();
		
	}, [])


	// create content State with empty HTML tag
	for(let j = 1; j <= 64; j++)
	{
		new_content.push({id: j,html:[<></>], type: "none", is_highlight: false, team: "none", is_first_move: true})
	}
	
	const [content, setContent] = useState(new_content);

	


	const [game_over_screen, setGame_over_screen] = useState(<></>);

	
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


	
	async function SetTeams()
	{

		websockett.send("which team")

		return new Promise((resolve, reject) => {

			websockett.onmessage = function(e) {
				console.log("your team: " + e.data);
			
				if(e.data == "white")
				{
					own_team = e.data;

					enemy_team = "black";

					your_image_dir = "/images/white/";

					enemy_image_dir = "/images/black/";

					your_turn = true;
				}
				else if(e.data == "black")
				{
					own_team = e.data;

					enemy_team = "white";

					your_image_dir = "/images/black/";

					enemy_image_dir = "/images/white/";

					your_turn = false;

				}
				else if(e.data == "none")
				{
					GameFull();
				}
				else
				{
					let turn_dict = JSON.parse(e.data);
				
				
					if(turn_dict.team == enemy_team)
					{
						console.log("execute move");

						MoveEnemyFigure(turn_dict.type, turn_dict.old_pos, turn_dict.new_pos);

						your_turn = true;
					}
				}
				resolve()
				
			}

		})

	}

	

	function PlaceFigure(field_pos, type, team)
	{
		const new_content = [...content]

		const new_html = new_content.find(item => item.id === field_pos)

		const image_location = figure_dict[type].image;

		console.log(your_image_dir + image_location);

		new_html.html = [
		<button className='figure-button' onClick={PlaceHighlights.bind(this, field_pos)}>
			<img className='figure-image' src={your_image_dir + image_location}></img>
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

		if(your_turn)
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
							<button className='figure-button'>
								<img className='figure-image' src={enemy_image_dir + figure_dict[new_html_test.type].image}></img>
							</button>				
						];
					}
	
					new_html_test.is_highlight = false;
	
				}		
			}
	
			
	
			// activefigure: the figure from where the last highlights were spawned
			// so the will highlights not be spawned twice!
			if (highlights_active && active_figure == figure_pos)
			{
				console.log("again")
	
				highlights_active = false
			
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
	
								let highlight_on_figure = false;
		
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

									// you cant beat the king!
									if(content[current_highlight_pos - 1].type == "king")
									{
										break
									}
	
									// you can only beat one figure in each direction
									if(highlight_on_figure)
									{
										break;
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
														
														<img className='figure-image' src={enemy_image_dir + figure_dict[new_html.type].image}></img>
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
												
												<img className='figure-image' src={enemy_image_dir + figure_dict[new_html.type].image}></img>
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
	
									if(content[current_highlight_pos - 1].type != "none")
									{
										highlight_on_figure = true;
									}
								}
							}
						}
						else
						{
							
							if (this_figure_dict[key] != 0)
							{
								
								const current_highlight_pos = this_figure_dict[key] * calc_dict[key] + figure_pos;
	
	
								// special movement for the knight
								if(content[figure_pos - 1].type == "knight")
								{
	
									let knight_beat_point1 = 0;
	
									let knight_beat_point2 = 0;
	
									if(key == "n" ||key == "s")
									{
										knight_beat_point1 = current_highlight_pos + 1;
	
										knight_beat_point2 = current_highlight_pos - 1;
									}
									else if (key == "w" ||key == "e")
									{
										knight_beat_point1 = current_highlight_pos + 8;
	
										knight_beat_point2 = current_highlight_pos - 8;
									}
	
	
									// prevent row overflow
									if(figure_pos % 8 == 7 && key == "e")
									{
										continue
									}
									if(figure_pos % 8 == 2 && key == "w")
									{
										continue
									}
	
									if(figure_pos % 8 == 0 && key == "e")
									{
										continue
									}
									if(figure_pos % 8 == 1 && key == "w")
									{
										continue
									}
	
	
									if(knight_beat_point1 > 0 && knight_beat_point1 < 64 && content[figure_pos - 1].team != content[knight_beat_point1 - 1].team)
									{
										if((key == "n" || key == "s") && figure_pos % 8 == 0)
										{
											// Do nothing
										}
										else
										{
											if(content[knight_beat_point1 - 1].type != "king")
											{

												RenderHighlight(knight_beat_point1, figure_pos);
											}
	
										}
										
									}
									if(knight_beat_point2 > 0 && knight_beat_point2 < 64 && content[figure_pos - 1].team != content[knight_beat_point2 - 1].team)
									{
										if((key == "n" || key == "s") && figure_pos % 8 == 1)
										{
											// Do nothing
										}
										else
										{
											if(content[knight_beat_point2 - 1].type != "king")
											{
												RenderHighlight(knight_beat_point2, figure_pos);

											}
										}
									}
	
	
									continue
								}
	
								
	
	
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
	
								}
	
	
								// on start the pawn can move 2 fields
	
								if(content[figure_pos - 1].is_first_move && content[figure_pos - 1].type == "pawn")
								{
									let second_highlight_pawn_pos = current_highlight_pos - 8;
	
									if(second_highlight_pawn_pos > 0 && "none" == content[second_highlight_pawn_pos - 1].team)
									{
										const second_highlight = new_content.find(item => item.id === second_highlight_pawn_pos)
	
										// check if a figure is on the field
										if (second_highlight.html[0].type == "button")
										{
											second_highlight.html = [
												<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, second_highlight_pawn_pos)}>
													
													<img className='highlight-image' src='/images/highlight.svg'></img>
													
													<img className='figure-image' src={enemy_image_dir + figure_dict[second_highlight.type].image}></img>
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
	
	
								// pawn can beat diagonal
								if(content[figure_pos - 1].type == "pawn")
								{
									
	
									let pawn_beat_point1 = figure_pos - 9;
									let pawn_beat_point2 = figure_pos - 7; 
	
	
									if(pawn_beat_point1 > 0 && content[pawn_beat_point1 - 1].team == enemy_team)
									{
										// preventing row overflow
										if(figure_pos % 8 != 1 && content[pawn_beat_point1 - 1].type != "king")
										{
										
											const pawn_beat1 = new_content.find(item => item.id === pawn_beat_point1)
		
											pawn_beat1.html = [
												<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, pawn_beat_point1)}>
													
													<img className='highlight-image' src='/images/highlight.svg'></img>
													
													<img className='figure-image' src={enemy_image_dir + figure_dict[pawn_beat1.type].image}></img>
												</button>
										
											];
		
											pawn_beat1.is_highlight = true;
										}
	
									}
	
									if(pawn_beat_point2 > 0 && content[pawn_beat_point2 - 1].team == enemy_team)
									{
										// preventing row overflow
										if(figure_pos % 8 != 0 && content[pawn_beat_point2 - 1].type != "king")
										{

											const pawn_beat2 = new_content.find(item => item.id === pawn_beat_point2)
		
											pawn_beat2.html = [
												<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, pawn_beat_point2)}>
													
													<img className='highlight-image' src='/images/highlight.svg'></img>
													
													<img className='figure-image' src={enemy_image_dir + figure_dict[pawn_beat2.type].image}></img>
												</button>
										
											];
		
											pawn_beat2.is_highlight = true;
										}
	
									}

									// pawn cant beat the figure straight ahead
									if(content[current_highlight_pos - 1].team != "none")
									{
										continue
									}
								}
	
								if(content[current_highlight_pos - 1].type == "king")
								{
									continue
								}
	
		
								const new_html = new_content.find(item => item.id === current_highlight_pos)
		
		
								// check if a figure is on the field
								if (new_html.html[0].type == "button")
								{
									new_html.html = [
										<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, current_highlight_pos)}>
											
											<img className='highlight-image' src={enemy_image_dir + figure_dict[new_html.type].image}></img>
											
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


				highlights_active = true;
			}
	
	
	
			setContent(new_content);
	
			active_figure = figure_pos;

		}
	}


	function RenderHighlight(position, figure_pos)
	{

		const new_content = [...content]


		const new_html = new_content.find(item => item.id === position)
	
	
		// check if a figure is on the field
		if (new_html.html[0].type == "button")
		{
			new_html.html = [
				<button className='figure-button' onClick={MoveToField.bind(this, figure_pos, position)}>
					
					<img className='highlight-image' src='/images/highlight.svg'></img>
					
					<img className='figure-image' src={enemy_image_dir + figure_dict[content[position - 1].type].image}></img>
				</button>
		
			];
		}
		else
		{

			new_html.html.push(
			<button className='highlight-button'  onClick={MoveToField.bind(this, figure_pos, position)}>
				<img className='highlight-image' src='/images/highlight.svg'></img>
			</button>);
		}

		new_html.is_highlight = true;


		setContent(new_content);

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

					console.log("auf einmal none")
				}
				else
				{
					new_html.html = [
						<button className='figure-button'>
							<img className='figure-image' src={your_image_dir + figure_dict[content[i - 1].type].image}></img>
						</button>				
					];

					console.log("kein none" + new_html.id)
				}

				new_html.is_highlight = false;

				setContent(new_content);
			}		
		}

		const new_content = [...content]

		const new_html = new_content.find(item => item.id === new_pos)

		const image_pos = figure_dict[content[old_pos - 1].type].image;

		console.log(image_pos)
		
		new_html.html = [
			<button className='figure-button' onClick={PlaceHighlights.bind(this, new_pos)}>
				<img className='figure-image' src={your_image_dir + image_pos}></img>
			</button>				
		];

		new_html.type = content[old_pos - 1].type;
		new_html.team = content[old_pos - 1].team;
		new_html.is_first_move = false;


		if(new_html.type == "king")
		{
			king_position = new_pos;
		}



		const old_html = new_content.find(item => item.id === old_pos)

		old_html.html = [<></>];

		old_html.type = "none";

		old_html.team = "none"

		old_html.is_first_move = false;

		send_turn(new_html.type, old_pos, new_pos);

		
		
		
		setContent(new_content);
		
		IsCheck(king_position)

	}

	function PlaceEnemyFigure(field_pos, type, team)
	{
		const new_content = [...content]

		const new_html = new_content.find(item => item.id === field_pos)

		const image_location = figure_dict[type].image;

		new_html.html = [
		<button className='figure-button'>
			<img className='figure-image' src={enemy_image_dir + image_location}></img>
		</button>

		];

		new_html.type = type
		new_html.team = team


		setContent(new_content);
	}
	function MoveEnemyFigure(type, old_pos, new_pos)
	{

		old_pos = Math.abs(old_pos - 65);
		new_pos = Math.abs(new_pos - 65);



		const new_content = [...content]

		const new_html = new_content.find(item => item.id === new_pos)

		const image_pos = figure_dict[type].image;

		console.log(image_pos)
		
		new_html.html = [
			<button className='figure-button'>
				<img className='figure-image' src={enemy_image_dir + image_pos}></img>
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

		IsCheck(king_position)
	}


	function IsCheck(field)
	{
		let is_check = false;

		// check for straight checks
		for(let i = 0; i < 4 && is_check == false; i++)
		{

			let loop = true

			let current_field = field;

			let iteration = 0;

			while(loop)
			{
				// checking north
				if(i == 0){
					current_field -= 8;

					if(current_field < 1)
					{
						break
					}
				}
				// checking east
				else if(i == 1){
					current_field += 1;

					// MAth.floor rundet immer ab!
					if(Math.floor(field / 8) != Math.floor(current_field / 8))
					{
						if(field % 8 == 0 && current_field < field && current_field % 8 != 0)
						{
							
						}
						else if(current_field % 8 != 0)
						{
							break
						}
						else if(field % 8 == 0 && current_field % 8 == 0)
						{
							break
						}
						
					}
					else if(current_field % 8 == 0 || field % 8 == 0)
					{
						break
					}
				}
				// checking south
				else if(i == 2){
					current_field += 8;

					if(current_field > 64)
					{
						break;
					}
				}
				// checking west
				else if(i == 3){
					current_field -= 1;

					// MAth.floor rundet immer ab!
					if(Math.floor(field / 8) != Math.floor(current_field / 8))
					{
						if(field % 8 == 0 && current_field < field && current_field % 8 != 0)
						{
							
						}
						else if(current_field % 8 != 0)
						{
							break
						}
						else if(field % 8 == 0 && current_field % 8 == 0)
						{
							break
						}
						
					}
					else if(current_field % 8 == 0 || field % 8 == 0)
					{
						break
					}
				}

				iteration += 1;



				if(content[current_field - 1].team == own_team)
				{
					console.log("own team")

					break;
				}
				else if(content[current_field - 1].type == "rook" || content[current_field - 1].type == "queen")
				{
					is_check = true;

					console.log("queen/rook: " + current_field)

					break;
				}
				else if(content[current_field - 1].type == "king")
				{
					if(iteration == 1)
					{
						is_check = true;

						console.log("king")

						break;
					}
					else
					{
						console.log("blocked by king")

						break;
					}
				}
				else if(content[current_field - 1].team == enemy_team)
				{
					console.log("blocked")

					break;
				}

				


			}
		}

		for(let i = 0; i < 4 && is_check == false; i++)
		{
			let loop = true

			let current_field = field;

			let iteration = 0;

			while(loop)
			{

				// checking north east / south east
				if(i == 0 || i == 1){
	
					if(field % 8 == 0)
					{
						break
						
					}
	
					if(i == 0)
					{
						current_field -= 7;
					}
					else if(i == 1)
					{
						current_field += 9;
					}
				}
	
				// checking south west / north west
				else if(i == 2 || i == 3)
				{
					if(field % 8 == 1)
					{
						break	
					}
	
					if(i == 2)
					{
						current_field += 7;
					}
					else if(i == 3)
					{
						current_field -= 9;
					}
				}
	
				if(current_field % 8 == 0 ||current_field % 8 == 1)
				{

					iteration += 1;
	
					if(content[current_field - 1].team == own_team)
					{
						console.log("own team")
	
						break;
					}
					else if(content[current_field - 1].type == "rook" || content[current_field - 1].type == "queen")
					{
						is_check = true;
	
						console.log("queen/bishop: " + current_field)
	
						break;
					}
					else if(content[current_field - 1].type == "king")
					{
						if(iteration == 1)
						{
							is_check = true;

							console.log("king")

							break;
						}
						else
						{
							console.log("blocked by king")

							break;
						}
					}
					else if(content[current_field - 1].type == "pawn")
					{
						if(iteration == 1 && (i == 0 || i == 3))
						{
							is_check = true;

							console.log("pawn")

							break;
						}
						else
						{
							console.log("blocked by pawn")

							break;
						}
					}
					else if(content[current_field - 1].team == enemy_team)
					{
						console.log("blocked")
	
						break;
					}
	
	
					break
				}

				iteration += 1;
	
				if(content[current_field - 1].team == own_team)
				{
					console.log("own team")
	
					break;
				}
				else if(content[current_field - 1].type == "rook" || content[current_field - 1].type == "queen")
				{
					is_check = true;
	
					console.log("queen/bishop: " + current_field)
	
					break;
				}
				else if(content[current_field - 1].type == "king")
					{
						if(iteration == 1)
						{
							is_check = true;

							console.log("king")

							break;
						}
						else
						{
							console.log("blocked by king")

							break;
						}
					}
					else if(content[current_field - 1].type == "pawn")
					{

						console.log(iteration + "," + i)

						if(iteration == 1 && (i == 0 || i == 3))
						{
							is_check = true;

							console.log("pawn")

							break;
						}
						else
						{
							console.log("blocked by pawn")

							break;
						}
					}
				else if(content[current_field - 1].team == enemy_team)
				{
					console.log("blocked")

					break;
				}
			}

		}

		let knight_add = [-15, -6, 10, 17, 15, 6, -10, -17]

		for(let i = 0; i < knight_add.length && is_check == false; i++)
		{
			if(i == 0 || i == 7)
			{
				if(Math.ceil((field + knight_add[i]) / 8) != Math.ceil(field / 8) - 2)
				{
					continue
				}

			}
			else if(i == 1 || i == 6)
			{
				if(Math.ceil((field + knight_add[i]) / 8) != Math.ceil(field / 8) - 1)
				{
					continue
				}
			}
			else if(i == 2 || i == 5)
			{
				if(Math.ceil((field + knight_add[i]) / 8) != Math.ceil(field / 8) + 1)
				{
					continue
				}
			}
			else if(i == 3 || i == 4)
			{
				if(Math.ceil((field + knight_add[i]) / 8) != Math.ceil(field / 8) + 2)
				{
					continue
				}
			}



			if(content[(field + knight_add[i]) - 1].team == own_team)
			{
				console.log("own team")

				continue
			}
			else if(content[(field + knight_add[i]) - 1].type == "knight")
			{
				is_check = true;

				console.log("knight")

				break;
			}
		}


		if(is_check)
		{
			console.log("check")
		}
		else
		{
			console.log("blocked")
		}

	}


	function StartPlaceOwnFigures()
	{

		

		console.log(own_team)

		// Place own Figures

		for(let pawn_field = 49; pawn_field <= 56; pawn_field++)
		{
			PlaceFigure(pawn_field, "pawn", own_team)
		}

		PlaceFigure(57, "rook", own_team);
		PlaceFigure(58, "knight", own_team);
		PlaceFigure(59, "bishop", own_team);

		if(own_team == "black")
		{
			PlaceFigure(60, "king", own_team);
			PlaceFigure(61, "queen", own_team);

			king_position = 60;
		}
		else if(own_team == "white")
		{
			PlaceFigure(60, "queen", own_team);
			PlaceFigure(61, "king", own_team);

			king_position = 61;
		}


		
		PlaceFigure(62, "bishop", own_team);
		PlaceFigure(63, "knight", own_team);
		PlaceFigure(64, "rook", own_team);


		
		// Place enemy Figures

		for(let pawn_field = 9; pawn_field <= 16; pawn_field++)
		{
			PlaceEnemyFigure(pawn_field, "pawn", enemy_team)
		}

		PlaceEnemyFigure(1, "rook", enemy_team);
		PlaceEnemyFigure(2, "knight", enemy_team);
		PlaceEnemyFigure(3, "bishop", enemy_team);

		if(enemy_team == "black")
		{
			PlaceEnemyFigure(5, "king", enemy_team);
			PlaceEnemyFigure(4, "queen", enemy_team);
		}
		else if(enemy_team == "white")
		{
			PlaceEnemyFigure(5, "queen", enemy_team);
			PlaceEnemyFigure(4, "king", enemy_team);
		}


		
		PlaceEnemyFigure(6, "bishop", enemy_team);
		PlaceEnemyFigure(7, "knight", enemy_team);
		PlaceEnemyFigure(8, "rook", enemy_team);

	}

	function GameFull()
	{
		let gamefull = (
		<div  className='GameOverScreen'>
			<div className='overlay-container'>
				<p className='overlay-text'>Game Full</p>
			</div>
		</div>
		)

		setGame_over_screen(gamefull);
	}


	function GameOverScreen(win)
	{

		let GameOverHtml = (<></>)

		if(win)
		{
			GameOverHtml = (
				<div  className='GameOverScreen'>
					<div className='overlay-container'>
						<p className='overlay-text'>You Won</p>
					</div>
				</div>
			);
		}
		else
		{
			GameOverHtml = (
				<div  className='GameOverScreen'>
					<div className='overlay-container'>
						<p className='overlay-text'>You Lost</p>
					</div>
				</div>
			);
		}

		setGame_over_screen(GameOverHtml);
	}

	async function Get_Figure_Dict()
	{
		const promise = await fetch("/dict", {
			method: "get"
		})
	
		const data = await promise.json();
	
		figure_dict = data;    
	}

	function send_turn(type, old_pos, new_pos)
	{

		let turn_dict = {team:own_team,type:type,new_pos:new_pos,old_pos:old_pos}

		websockett.send(JSON.stringify(turn_dict));

		your_turn = false;

	}



	return (
		<div className="App">
			<div className="board-container">
				<div className="chess-board">
					{chess_board}
				</div>

			</div>

			<div>
				{game_over_screen}
			</div>

			<button onClick={StartPlaceOwnFigures}>Place</button>
			<button onClick={GameOverScreen.bind(this, true)}>Game Over Screen</button>
		</div>
	)
}

export default App
