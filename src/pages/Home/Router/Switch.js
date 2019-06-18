import React, { Component } from 'react';
import { Consumer } from './context';
export default class Switch extends Component {
    render() {
        return (
            <Consumer>
                {state => {
                    let pathname = state.location.pathname;
                    let children = this.props.children || [];
                    // console.log('Switch===',children,pathname);
                    for (let i = 0; i < children.length; i++) {
                        let child = children[i];
                        let path = child.props.path;
                        console.log('Switch==', pathname, path);
                        if (path === pathname) {
                            return child;
                        }
                    }
                    return null;
                }}
            </Consumer>
        );
    }
}
