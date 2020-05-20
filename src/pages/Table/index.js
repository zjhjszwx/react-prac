import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { List, AutoSizer } from 'react-virtualized';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
];


let data = [];

for (let i = 0; i < 10; i++) {
    let array = [];
    for (let j = 0; j < 500; j++) {
        array.push({
            key: `${i} - ${j}`,
            name: `${i} - ${j}` + 'name',
            age: `${i} - ${j}` + 'age',
        });
    }
    data.push({
        key: i,
        name: i + 'name',
        age: i + 'age',
        children: array,
    });
}

export default class index extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} />
                <MTable columns={columns} dataSource={data} />
            </div>
        );
    }
}

class MTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expend: false,
        };
    }

    renderThs = (columns) => {
        return columns.map((i) => {
            return <th key={i.key}>{i.title}</th>;
        });
    };

    renderRows = (columns, data) => {
        return (
            data &&
            data.map((i) => {
                let isTree = i.children && i.children.length > 0;
                return (
                    <div>
                        <tr className="ant-table-row ant-table-row-level-0" key={i.key}>
                            {isTree ? (
                                <span style={{ margin: 10, fontSize: 20 }} onClick={() => this.setState({ expend: !this.state.expend })}>
                                    +
                                </span>
                            ) : null}{' '}
                            {this.renderTds(columns, i)}
                        </tr>

                        {this.state.expend ? (
                            <List
                                // 窗口的高度,必填
                                height={200}
                                // 窗口的宽度,必填
                                width={300}
                                // 总共个数
                                rowCount={i.children.length}
                                // cell高度
                                rowHeight={40}
                                rowRenderer={(obj) => {
                                    const { key, index, isScrolling, style } = obj;
                                    console.log(i.children[index]);
                                    if (isScrolling) {
                                        return (
                                            <div key={key} style={style}>
                                                滚动中...
                                            </div>
                                        );
                                    }
                                    return <div  key={key} style={style}>{this.renderTds(columns, i.children[index])}</div>;
                                }}
                            ></List>
                        ) : null}
                    </div>
                );
            })
        );
    };

    renderTds = (columns, row) => {
        return columns.map((i) => {
            return (
                <td style={{ width: 100 }} key={i.key}>
                    {row[i.dataIndex]}
                </td>
            );
        });
    };

    render() {
        const { columns, dataSource } = this.props;

        return (
            <div>
                <table>
                    <thead className="ant-table-thead">
                        <tr>{this.renderThs(columns)}</tr>
                    </thead>
                    <thody>{this.renderRows(columns, dataSource)}</thody>
                </table>
            </div>
        );
    }
}
