import React, { Component } from 'react';
/**
 * 1.根据ui划分层级,组件应当遵守单一功能性原则(每个类都应该有一个单一的功能,并且该功能应该由这个类完全封装起来)
 * 2.用写出不含交互逻辑的 UI 页面，并且通过 props 设计父组件向子组件的数据传输。
 * 自顶向下构建应用
 * 3.遵守state最小表示原则,将 state 写在所需的组件内。并且根据需要计算出其他数据。
它是通过 props 从父级传来的吗？如果是，他可能不是 state。
它随着时间推移不变吗？如果是，它可能不是 state。
你能够根据组件中任何其他的 state 或 props 把它计算出来吗？如果是，它不是 state。
 * 4.确定哪个组件可以改变这些 state，写上组件改变 state 的逻辑。
确定每一个需要这个 state 来渲染的组件。
找到一个公共所有者组件(一个在层级上高于所有其他需要这个 state 的组件的组件)
这个公共所有者组件或另一个层级更高的组件应该拥有这个 state。
如果你没有找到可以拥有这个 state 的组件，创建一个仅用来保存状态的组件并把它加入比这个公共所有者组件层级更高的地方。
 * 5.通过 props 状态提升来实现反向数据流。
 * 
 * */

var PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }
    handleFilterTextInput = filterText => {
        this.setState({
            filterText: filterText
        });
    };

    handleInStockInput = inStockOnly => {
        this.setState({
            inStockOnly: inStockOnly
        });
    };
    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
            </div>
        );
    }
}
class SearchBar extends Component {
    handleFilterTextInputChange = e => {
        this.props.onFilterTextInput(e.target.value);
    };
    handleInStockInputChange = e => {
        this.props.onInStockInput(e.target.checked);
    };

    render() {
        return (
            <form>
                <input type="text" placeholder="search ..." value={this.props.filterText} onChange={this.handleFilterTextInputChange} />
                <p>
                    <input type="checkbox" value={this.props.inStockOnly} onChange={this.handleInStockInputChange} />
                    only show products in stocked
                </p>
            </form>
        );
    }
}
class ProductTable extends Component {
    render() {
        console.log(this.props);
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(i => {
            if (i.name.indexOf(this.props.filterText) === -1 || (!i.stocked && this.props.inStockOnly)) {
                return;
            }
            if (i.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={i.category} key={i.category} />);
            }
            rows.push(<ProductRow product={i} key={i.name} />);
            lastCategory = i.category;
        });
        return (
            <table>
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
class ProductCategoryRow extends Component {
    render() {
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        );
    }
}
class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

export default FilterableProductTable;
