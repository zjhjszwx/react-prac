import React, { memo } from 'react'
import { Modal, Radio, Form, DatePicker } from 'antd'
function ModalDemo({ visible, onCancel, onOk, name }) {
    if (!visible) {
        return
    }
    const [form] = Form.useForm();
    console.log('modalDemo', name)

    return (
        <Modal
            visible={visible}
            onCancel={onCancel}
            onOk={onOk}
            title={name}
        >
            <Form form={form}>
                <Form.Item name="a" label="radio">
                    <Radio.Group>
                        <Radio value={1}>1</Radio>
                        <Radio value={2}>2</Radio>
                        <Radio value={3}>3</Radio>
                        <Radio value={4}>4</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="b" label="date">
                    <DatePicker />
                </Form.Item>
            </Form>

        </Modal>
    )
}

export default memo(ModalDemo)
