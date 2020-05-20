import React, { Component } from 'react';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            date: [
                { name: 'a', value: '', id: 1 },
                { name: 'b', value: '', id: 2 },
            ],
        };
    }

    handleClick = () => {
        this.setState({
            xxx: this.state.xxx.filter((val, index) => {
                // 需要return
                return val.name !== 'box';
            }),
        });
    };

    handleAdd = () => {
        const { date } = this.state;
        date.unshift({ name: 'd', value: '', id: 3 });
        this.setState({
            date,
        });
    };
    handleDel = () => {
        const { date } = this.state;
        date.pop();
        this.setState({
            date,
        });
    };

    handleChange = (e, index) => {
        console.log(e.target.value);
        const { date } = this.state;
        date[index].value = e.target.value;
        this.setState({
            date,
        });
    };

    handleChangeKey = () => {
        const { date } = this.state;
        date[0].id = '11';
        this.setState({
            date,
        });
    };
    render() {
        const { date } = this.state;

        return (
            <div>
                {date.map((i, index) => {
                    return <App name={i.name} key={i.id} />;
                })}
                <button onClick={this.handleAdd}>add</button>
                <button onClick={this.handleDel}>del</button>
                <button onClick={this.handleChangeKey}>change key</button>
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
    componentWillUnmount() {
        console.log('componentWillUnmount...');
    }
    render() {
        console.log('render...', this.props.name);

        return (
            <div>
                {this.props.name}
                <input />
                {/* <input value={i.value} onChange={(e) => this.handleChange(e, index)} /> */}
            </div>
        );
    }
}

export default Index;
