function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
				<div className="team">
					<div className="team-name">Alabama</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
				<div className="team">
					<div className="team-name">Clemson</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(
	<Application title="National Championship Scoreboard"/>,
	document.getElementById('container')
)