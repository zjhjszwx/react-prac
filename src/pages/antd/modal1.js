import React, { memo, useState } from 'react'
import { Modal, Button } from 'antd';

const Demo = memo(({ visible }) => {

    console.log('demo', visible)
    return (
        <Modal
            visible={visible}
            title={null}
            footer={<div><Button type="primary" >确定</Button></div>}
            wrapClassName="tipModal"
            width={420}
        >
            继续添加成员需要.....
        </Modal>
    )
})

export default Demo

