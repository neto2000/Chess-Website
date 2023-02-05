import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"

let chess_board = [];

let new_content = []




function App() {


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

	

	function PlaceFigure(field_pos)
	{
		const new_content = [...content]

		const new_html = new_content.find(item => item.id === field_pos)

		new_html.html = [
		<button className='figure-button'>
			<img className='figure-image' src='/images/Bauer.svg'></img>
		</button>

		];

		setContent(new_content);
	}

	
	function PlaceHighlight(field_pos)
	{
		const new_content = [...content]

		const new_html = new_content.find(item => item.id === field_pos)


		new_html.html.push(
		<button className='highlight-button'>
			<img className='highlight-image' src='/images/highlight.svg'></img>
		</button>);

		setContent(new_content);
	}


	return (
		<div className="App">
			<div className="board-container">
				<div className="chess-board">
					{chess_board}
				</div>

			</div>
			<button onClick={PlaceFigure.bind(this, 4)}>Place</button>
		</div>
	)
}

export default App
