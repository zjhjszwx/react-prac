import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TabSelect extends Component {
    static propTypes = {
        value: PropTypes.string,
        options: PropTypes.array,
        onChange: PropTypes.func
    };

    static defaultProps = {
        value: null,
        options: [],
        onChange: () => {}
    };

    render(){
        const {value,options,onChange } = this.props
        return (
            <div>
                <ul>
                    {options.map(i=(
                        return 
                    ))}
                </ul>
            </div>

        )
    }


}
