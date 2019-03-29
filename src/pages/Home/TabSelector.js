import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
//函数作为子组件
class TabSelect extends Component {
    static propTypes = {
        value: PropTypes.string,
        options: PropTypes.array,
        onChange: PropTypes.func.isRequired,
        children:PropTypes.func,
    };

    render() {
        const { value, options, onChange } = this.props;
        return (
            <div>
                <ul>
                    {options.map(i => (
                        <li className={`${value === i.value ? 'active' : ''}`} onClick={() => onChange(i.value)} key={i.value}>
                            {i.name}
                        </li>
                    ))}
                </ul>
                {this.props.children(value)}
            </div>
        );
    }
}

const options = [{ name: 'n1', value: 'v1' }, { name: 'n2', value: 'v2' }, { name: 'n3', value: 'v3' }];
export default class TabSelectSample extends Component {
    state = {
        value: null
    };
    
    static getDerivedStateFromProps(nextProps,prevState){
        console.log("get Derived")
        return {...prevState,value:prevState.value || '1'}
    }
    render() {
        console.log(this.state.value)
        return (
            <TabSelect
                onChange={c => {
                    this.setState({ value: c });
                }}
                options={options}
                value={this.state.value}
            >
                {value => (
                    <span>
                        vals: {value}
                    </span>
                )}
            </TabSelect>
        );
    }
}
