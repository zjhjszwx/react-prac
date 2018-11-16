import React, {Component} from 'react';
import {Button,DatePicker, Icon} from 'antd';

import Icons from './Icon'
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
                <button onClick={() => this._handleClick()}>自增11</button>
                <i className="iconfont icon-file-zip" />
                <i className="iconfont icon-huodong"></i>

                <Icons type="close" color="red" />
            </div>
        )
    }
}



