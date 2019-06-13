import React, { Component } from 'react';
export default (OldComponent, name) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: ''
            };
        }
        componentDidMount() {
            this.setState({
                data:localStorage.getItem(name)
            })
        }
        onSave = e => {
            localStorage.setItem(name, e.target.value);
        };
        render() {
            return <OldComponent data={this.state.data} save={this.onSave} name={name}/>;
        }
    }

    return NewComponent;
};
