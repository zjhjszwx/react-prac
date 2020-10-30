import React from 'react'
import { Modal, Button } from 'antd';

const Demo = (props) => {

    console.log('modalDemo', '4')

    const { visible, onOk, onCancel } = props
    return (
        <Modal
            visible={visible}
            title={null}
            footer={<div><Button type="primary" >确定</Button></div>}
            wrapClassName="tipModal"
            width={420}
            onOk={onOk}
            onCancel={onCancel}
        >
            继续添加成员需要.....
        </Modal>
    )

}

export default Demo

