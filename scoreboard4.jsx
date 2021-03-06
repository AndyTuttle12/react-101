function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}
function Team(props){
	return(
		<div className="team">
			<div className="team-name">{props.name}</div>
			<div className="counter">
				<button className="counter-change minus">-</button>
				<div className="team-score"> {props.score} </div>
				<button className="counter-change plus">+</button>
			</div>
		</div>
	)
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
				<Team name="Alabama" score="0"/>
				<Team name="Clemson" score="0"/>
			</div>
		</div>
	)
}

ReactDOM.render(
	<Application title="National Championship Scoreboard"/>,
	document.getElementById('container')
)