import React, {Component} from 'react';
import {Button,DatePicker} from 'antd';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                this is home111~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
                <li>
                <i className="icon iconfont">&#xe638;</i>
                    <div className="name">草莓</div>
                    <div className="code">&amp;#xe638;</div>
                </li>
            </div>
        )
    }
}