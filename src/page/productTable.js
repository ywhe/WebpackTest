import React from 'react'

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>
                    <span style={!this.props.product.stocked ? { color: 'red' } : {}}>
                        {this.props.product.name}
                    </span>
                </td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}
class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<tr><td><b>{this.props.name}</b></td></tr>);
    }
}

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const keyword = this.props.keyword;
        const isStockOnly = this.props.isStockOnly;
        const rows = [];
        const products = this.props.products;
        let currentCategory = "";
        products.forEach(p => {
            if (p.name.indexOf(keyword) === -1) return;
            if (isStockOnly && !p.stocked) return;
            if (p.category !== currentCategory) {
                currentCategory = p.category;
                rows.push(<ProductCategoryRow key={currentCategory} name={currentCategory}></ProductCategoryRow>);
            }
            rows.push(<ProductRow key={p.name} product={p}></ProductRow>)

        });

        return (<div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div >);
    }
}
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleIsStockOnlyChange = this.handleIsStockOnlyChange.bind(this);
    }
    render() {
        return (
            <form>
                <input onChange={this.handleKeywordChange}
                    type="text"
                    value={this.props.keyword}
                    placeholder="Search..."></input><br />
                <input
                    onChange={this.handleIsStockOnlyChange}
                    checked={this.props.isStockOnly}
                    type="checkbox" ></input>{'  '}Only show products in stock
            </form>
        );
    }
    handleKeywordChange(e) {
        this.props.onKeywordchange(e.target.value);
    }
    handleIsStockOnlyChange(e) {
        this.props.onIsStockOnlyChange(e.target.checked);
    }
}
class ProductTableWithFilter extends React.Component {
    constructor(props) {
        super(props);
        this.products = [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ];
        this.state = { keyword: "", isStockOnly: false }
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleIsStockOnlyChange = this.handleIsStockOnlyChange.bind(this);
    }
    render() {
        return (
            <div>
                <h1>ProductTable</h1>
                <div>
                    <SearchBox keyword={this.state.keyword}
                        isStockOnly={this.state.isStockOnly}
                        onKeywordchange={this.handleKeywordChange}
                        onIsStockOnlyChange={this.handleIsStockOnlyChange} /><br />
                    <ProductTable products={this.products} keyword={this.state.keyword} isStockOnly={this.state.isStockOnly}></ProductTable>
                </div>
            </div>
        );
    }
    handleKeywordChange(text) {
        this.setState({ keyword: text });
    }
    handleIsStockOnlyChange(checked) {
        this.setState({ isStockOnly: checked });
    }
}
export default ProductTableWithFilter;