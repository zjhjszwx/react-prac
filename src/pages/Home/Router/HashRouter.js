import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HashRouter extends Component {
    static childContextTypes = {
        location: PropTypes.object,
        match: PropTypes.object
    };
    constructor(props) {
        super(props);

        this.state = {
            location: {
                pathname: window.location.hash.slice(1) || '/'
            }
        };
    }
    getChildContext = () => {
        return {
            location: this.state.location,
            match: {}
        };
    };

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                location: {
                    pathname: window.location.hash.slice(1) || '/'
                }
            });
        });
    }

    render() {
        console.log(window.location.hash.slice(1));
        return this.props.children;
    }
}
