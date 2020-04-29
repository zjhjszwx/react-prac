import React, { Component } from 'react';

class App extends React.Component {
    innerClick = (e) => {
        console.log(e);
        console.log('A: react inner click.');
        // e.stopPropagation();
    };

    outerClick = () => {
        console.log('B: react outer click.');
    };

    componentDidMount() {
        document.getElementById('outer').addEventListener('click', () => console.log('C: native outer click'));

        window.addEventListener('click', () => console.log('D: native window click'));
    }

    render() {
        return (
            <div id="outer" onClick={this.outerClick}>
                <button id="inner" onClick={this.innerClick}>
                    BUTTON
                </button>
            </div>
        );
    }
}
class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
        };
    }
    handleClick = () => {
        console.log('edit button click!!');
        this.setState({ editable: true });
    };
    handleSubmit = (e) => {
        console.log('submit event!!');
        e.preventDefault(); //避免页面刷新
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.editable ? (
                    <button type="submit">submit</button>
                ) : (
                    <button type="button" onClick={this.handleClick}>
                        edit
                    </button>
                )}
            </form>
        );
    }
}

class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cnt: 0 };
    }

    increase = () => {
        this.setState((prevState) => {
            return { cnt: prevState.cnt + 1 };
        });
    };

    handleClick = () => {
        // event handler
        this.increase();
        this.increase();
        this.increase();
    };

    handleAsyncClick() {
        setTimeout(() => {
            // outside event handler
            this.increase();
            this.increase();
            this.increase();
        }, 1000);
    }

    render() {
        console.log('render!!');
        return (
            <div>
                {this.state.cnt}
                <br />
                <button onClick={this.handleClick.bind(this)}>Call this.increase 3 times synchronously.</button>

                <button onClick={this.handleAsyncClick.bind(this)}>Call this.increase 3 times asynchronously using setTimeout.</button>
            </div>
        );
    }
}
export default App3;
