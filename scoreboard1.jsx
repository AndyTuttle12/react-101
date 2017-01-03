function Application(){
	return(
		<div className="scoreboard">
			<div className="header">
				<h1>{props.title}</h1>
			</div>
			<div className="teams">
				{/* You never use className to select. Just for css purposes.*/}
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
	<Application title=""/>,
	document.getElementById('container')
)