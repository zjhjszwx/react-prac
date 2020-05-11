import React, { Component } from 'react';

export default class Index extends Component {
    state = {
        numbers: [1, 2, 3],
    };

    handleClick = () => {
        this.setState({
            numbers: [2, 2, 3],
        });
    };
    render() {
        return (
            <div>
                <ul>
                    {this.state.numbers.map((val) => (
                        <App key={val} val={val} />
                    ))}
                </ul>

                <button onClick={this.handleClick}>btn</button>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor...');
        this.state = {
            count: 0,
        };
    }
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps...');
    }
    componentDidMount() {
        console.log('componentDidMount...');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate...');
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate...');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate...');
    }
    render() {
        console.log('render...', this.props.val);

        return <div>{this.props.val}</div>;
    }
}
