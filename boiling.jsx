
function toCelcius(f){
	return(f - 32) * 5/9;
}

function toFahrenheit(c){
	return(c * 9/5) + 32;
}

function tryConvert(value, tUnit){
	var tryNumber = Number(value);
	if(isNaN(tryNumber)){
		// Not a number
		return '';
	}else{
		// isValid
		if(tUnit == 'c'){
			var convertedNum = toFahrenheit(tryNumber);
		}else{
			var convertedNum = toCelcius(tryNumber);
		}
		return convertedNum;
	}
}

// console.log(tryConvert(212, 'f'));
// console.log(tryConvert(0, 'c'));

function BoilingVerdict(props){
	if(props.celcius >= 100){
		return(
			<p>The water would boil at {props.celcius}&deg; C or {props.fahrenheit}&deg; F</p>
		)
	}else{
		return(
			<p>The water would NOT boil at {props.celcius}&deg; C or {props.fahrenheit}&deg; F</p>
		)
	}
}

var TempuratureInput = React.createClass({

	handleChange: function(event){
		this.props.onChange(event.target.value)
	},

	render: function(){
		var value = this.props.value;
		var tUnits = this.props.tUnits;
		return(
			<div>
				<label>Enter Temp in question in &deg;{tUnits}: </label>
				<input placeholder="Temp" value={value} onChange={this.handleChange} />
			</div>
		)
	}
})

var Calculator = React.createClass({
	getInitialState: function() {
		return{
			value: 0,
			scale: 'c'
		}
	},

	handleCelciusChange: function(value){
		this.setState({
			scale: 'c',
			value: value
		})
	},

	handleFahrenheitChange: function(value){
		this.setState({
			scale: 'f',
			value: value
		})
	},

	render: function(){
		var scale = this.state.scale;
		var value = this.state.value;
		if(scale == 'c'){
			var fTemp = tryConvert(value, 'c');
			var cTemp = value;
		}else if(scale == 'f'){
			var fTemp = value;
			var cTemp = tryConvert(value, 'f');
		}

		return(
			<div>
				<TempuratureInput tUnits="Celcius" value={cTemp} onChange={this.handleCelciusChange} />
				<TempuratureInput tUnits="Fahrenheit" value={fTemp} onChange={this.handleFahrenheitChange} />
				<BoilingVerdict celcius={Number(cTemp)} fahrenheit={Number(fTemp)} />
			</div>
		);
	}
})

ReactDOM.render(
	<Calculator />,
	document.getElementById('boiling')
)