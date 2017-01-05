class ProductCategoryRow extends React.Component {
	render() {
		return (<tr className="category"><th colSpan="2">{this.props.category}</th></tr>);
	}
}

class ProductRow extends React.Component {
	render() {
		var name = this.props.product.stocked ?
			this.props.product.name :
			<span style={{color: 'red'}}>
				{this.props.product.name}
			</span>;
		return (
			<tr>
				<td className="item-name">{name}</td>
				<td className="item-price">{this.props.product.price}</td>
			</tr>
		);
	}
}

class ProductTable extends React.Component {
	render() {
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach((product) => {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		});
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
  
	handleChange() {
		this.props.onUserInput(
			this.filterTextInput.value,
			this.inStockOnlyInput.checked
		);
	}
  
	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					ref={(input) => this.filterTextInput = input}
					onChange={this.handleChange}
				/>
				<p>
					<input
						className="check-box"
						type="checkbox"
						checked={this.props.inStockOnly}
						ref={(input) => this.inStockOnlyInput = input}
						onChange={this.handleChange}
					/>
					{' '}
					<span>Only show products in stock</span>
				</p>
			</form>
		);
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};
    
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(filterText, inStockOnly) {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		});
	}

	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onUserInput={this.handleUserInput}
				/>
				<ProductTable
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}
}


var PRODUCTS = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Sporting Goods', price: '$999.99', stocked: true, name: 'Kayak'},
	{category: 'Sporting Goods', price: '$89.99', stocked: false, name: 'Fishing Pole'},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
	{category: 'Electronics', price: '$699.99', stocked: false, name: 'iPhone 6'},
	{category: 'Electronics', price: '$899.99', stocked: true, name: 'iPhone 7'},
	{category: 'Electronics', price: '$799.99', stocked: false, name: 'Pixel'},
	{category: 'Electronics', price: '$999.99', stocked: true, name: 'Pixel XL'},
	{category: 'Electronics', price: '$3499.99', stocked: true, name: 'MacBook Pro'},
	{category: 'Apparel', price: '$199.99', stocked: false, name: 'Air Jordan'},
	{category: 'Apparel', price: '$39.99', stocked: true, name: 'hoodie'},
	{category: 'Apparel', price: '$149.99', stocked: true, name: 'jeans'},
	{category: 'Snacks', price: '$0.99', stocked: true, name: 'CandyBar'},
	{category: 'Snacks', price: '$1.99', stocked: true, name: 'Popcorn'},
	{category: 'Snacks', price: '$2.99', stocked: false, name: 'Easy Mac'},
	{category: 'Drinks', price: '$1.99', stocked: true, name: 'RedBull'},
	{category: 'Drinks', price: '$0.99', stocked: true, name: 'Coffee'}
];

ReactDOM.render(
	<FilterableProductTable products={PRODUCTS} />,
	document.getElementById('container')
);
