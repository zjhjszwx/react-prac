import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor');
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.timer = setTimeout(() => {
            this.setState(prev => ({
                date: new Date()
            }));
        }, 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render()');
        return <div>{this.state.date.toLocaleString()}</div>;
    }
}
