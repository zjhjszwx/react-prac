import React, { Component } from 'react';
import { Select } from 'antd';
import SuperSelect from './SuperSelect';
const children = [];

for (let i = 0; i < 5000; i++) {
    children.push(
        <Option value={i + 'aa'} key={i}>
            {i}
        </Option>
    );
}
export default class index extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '300px' }}>
                    superSelect: 所有用法同 antd 原 Select, 只是替换 Select 为 SuperSelect
                    <SuperSelect showSearch allowClear mode="multiple" onChange={this.onChange} onSearch={this.onSearch} style={{ width: '300px' }}>
                        {children}
                    </SuperSelect>
                </div>
                <div style={{ width: '300px' }}>
                    Ant Select:
                    <Select
                        showSearch
                        allowClear
                        // mode="multiple"
                        onChange={this.onChange}
                        onSearch={this.onSearch}
                        style={{ width: '300px' }}
                    >
                        {children}
                    </Select>
                </div>
            </div>
        );
    }
}
