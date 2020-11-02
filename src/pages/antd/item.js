import React, { useEffect } from 'react'
import { Modal, Button } from 'antd';
import Modal5 from './Modal5';

const Demo = (props) => {

    console.log('modalDemo 5', props)

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
            item
        </Modal>
    )

}

export default Modal5(Demo)

