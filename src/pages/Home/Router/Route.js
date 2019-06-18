import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
export default class Route extends Component {
    // 接收参数
    // static contextTypes = {
    //     location: PropTypes.object
    // };

    render() {
        // : 别名
        // let { component: Component, path } = this.props;
        // let { location } = this.context;
        // let pathname = location.pathname;

        // if (pathname === path) {
        //     return <Component />;
        // } else {
        //     return null;
        // }

        return (
            <Consumer>
                {state => {
                    console.log('Route===', state);
                    let { component: Component, path } = this.props;
                    let { location } = state;
                    let pathname = location.pathname;
                    if (pathname === path) {
                        return <Component />;
                    } else {
                        return null;
                    }
                }}
            </Consumer>
        );
    }
}
