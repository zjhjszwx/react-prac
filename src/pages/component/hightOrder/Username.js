import React, { Component } from 'react';
import local from  './local';
class Username extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount() {
    //     this.username.value = localStorage.getItem('username');
    // }
    // onChange = e => {
    //     localStorage.setItem('username', e.target.value);
    // };
    render() {
        return (
            <div>
                <label>
                    {this.props.name}
                    <input 
                    // ref={ e => this.username = e} 
                    defaultValue={this.props.data}
                    onChange={this.props.save} />
                </label>
            </div>
        );
    }
}
export default local(Username,'username')
