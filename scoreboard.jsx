var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers"
	}
];

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
			<Counter score={props.score}/>
		</div>
	)
}

var Counter = React.createClass({
	getInitialState: function() {
		return {score: 0}
	},

	losePoint: function(){
		console.log("You clicked the - button")
		this.setState({
			score: (this.state.score - 1)
		})
	},

	gainPoint: function(){
		console.log("You clicked the + button")
		this.setState({
			score: (this.state.score + 1)
		})
	},

	render: function(){
		return(
			<div className="counter">
				<button onClick={this.losePoint} className="counter-change minus">-</button>
				<div className="team-score"> {this.state.score} </div>
				<button onClick={this.gainPoint} className="counter-change plus">+</button>
			</div>
		)
	}
});

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
				{/*<Team name="Alabama" score="0"/>*/}
				{/*<Team name="Clemson" score="0"/>*/}
				{props.teams.map((team, index, array) =>{
					return <Team key={index} name={team.name} score={team.score} />

				})}
			</div>
		</div>
	)
}

ReactDOM.render(
	<Application title="National Championship Scoreboard" teams={teams}/>,
	document.getElementById('container')
)