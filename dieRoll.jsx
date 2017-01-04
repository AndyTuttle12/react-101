var Application = React.createClass({
	getInitialState: function(){
		return{
			number: 20
		}
	},

	rollDie: function(){
		var checkState = this.state.number
		var randNum = Math.ceil(Math.random() * 20)
		this.setState({
			number: randNum
		})
	},

	render: function(){
		return(
			<div className="application">
				<button onClick={this.rollDie}>Click to Roll</button>
				<div>{this.state.number}</div>
			</div>
		)
	}
});

ReactDOM.render(
	<Application />,
	document.getElementById('container')
);