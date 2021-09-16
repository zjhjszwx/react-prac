import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: this.props.time
        };
    }

    componentDidMount() {
        this._interval = setInterval(this.update, 1000);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    update = () => {
        this.setState({
            time: new Date()
        });
    };

    format = t => {
        let [hours, minutes, seconds] = [t.getHours(), t.getMinutes(), t.getSeconds()].map(i => (i < 10 ? '0' + i : i));
        console.log([hours, minutes, seconds]);
        return { hours, minutes, seconds };
    };

    render() {
        const time = this.format(this.state.time);
        return (
            <div>
                {time.hours}:{time.seconds}:{time.hours}
            </div>
        );
    }
}
