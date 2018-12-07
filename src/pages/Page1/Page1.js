import React, {Component} from 'react';
import "./Page1.css";
import image from 'assets/images/1.jpg';
export default class Page1 extends Component {
    render() {
        return (
            <div className="box">
                <img src={image}/>
 
                this is Page1~11    
            </div>
        )
    }
}