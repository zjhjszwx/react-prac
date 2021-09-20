import React, { useState, useEffect } from "react";
import { Table } from "antd";

export default function NestedTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let data = [];
    let data2 = [];
    for (let i = 0; i < 3; ++i) {
      data2.push({
        key: i,
        id: i,
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        checked: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        id: i,
        name: "Screem",
        checked: false,
        data2: data2
      });
    }

    setData(data);
  }, []);

  const expandedRowRender = (row, index) => {
    let keys = []
    row.data2.forEach(i => {
      if (i.checked === true) {
        keys.push(i.id)
      }
    })
    const columns = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Name", dataIndex: "name", key: "name" }
    ];
    const onSelectChange = (e) => {
      let dataCopy = JSON.parse(JSON.stringify(data))
      let data2 = dataCopy[index].data2
      data2.forEach(i => {
        if (e.includes(i.id)) {
          i.checked = true
        } else {
          i.checked = false
        }
      })
      if (e.length === 0) {
        dataCopy[index].checked = false
      }
      if (e.length === data2.length) {
        dataCopy[index].checked = true
      }

      setData(dataCopy)
    };
    const rowSelection = {
      selectedRowKeys: keys,
      onChange: onSelectChange
    };

    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={row.data2}
        pagination={false}
      />
    );
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Platform", dataIndex: "platform", key: "platform" }
  ];

  const onSelectChange = (e) => {
    let dataCopy = JSON.parse(JSON.stringify(data))
    dataCopy.forEach((i) => {
      if (e.includes(i.id)) {
        i.checked = true
        i.data2.forEach(t => {
          t.checked = true
        })
      } else {
        i.checked = false
        i.data2.forEach(t => {
          t.checked = false
        })
      }
    });
    setData(dataCopy);
  };

  let keys = []
  data.forEach(i => {
    if (i.checked === true) {
      keys.push(i.id)
    }
  })

  const rowSelection = {
    selectedRowKeys: keys,
    onChange: onSelectChange
  };
  console.log("data===", data);
  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender: (record, index) => expandedRowRender(record, index) }}
      dataSource={data}
      rowSelection={rowSelection}
    />
  );
}


