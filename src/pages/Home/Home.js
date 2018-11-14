import React, {Component} from 'react';
<<<<<<< HEAD
import {Button,DatePicker} from 'antd';
=======
import './index.css';
>>>>>>> d40271a5f5eebb8fd28750cfc21782547d315ff3
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
<<<<<<< HEAD
                this is 2~<br/>
=======
                this is home111~<br/>
>>>>>>> d40271a5f5eebb8fd28750cfc21782547d315ff3
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