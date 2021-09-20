import React, { Component } from 'react';

export default class Mobile extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.mobile.value = localStorage.getItem('mobile');
    }
    onChange = e => {
        localStorage.setItem('mobile', e.target.value);
    };
    render() {
        return (
            <div>
                <label>
                    手机号
                    <input ref={ e => this.mobile = e} onChange={this.onChange} />
                </label>
            </div>
        );
    }
}
