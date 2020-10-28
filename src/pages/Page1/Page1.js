import React, { Component } from 'react';
import "./Page1.css";
import image from 'assets/images/1.jpg';

import FormDemo from '../antd/form.js'
export default class Page1 extends Component {
    render() {
        return (
            <div className="box">
                <FormDemo />
                this is Page1~11
            </div>
        )
    }
}