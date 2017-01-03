function Application(props){
	// Caps means component
	// components return 1 virtual DOM element each
	return(
		<div className="application">
			<h1>{props.title}</h1>
			{props.message}
		</div>
	)
}

ReactDOM.render(
	<Application message="Hello, Class" title="React Day!"/>,
	document.getElementById('container')
)