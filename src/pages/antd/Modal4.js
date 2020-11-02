import React, { memo, useState, useRef, useEffect } from "react";
import { Modal } from "antd";
const Modal4 = memo((props, ref) => {
    const [visible, setVisible] = useState(false);
    const payloadRef = useRef({});
    useEffect(() => {
        const lastShow = Modal4.show;
        Modal4.show = (payload) => {
            console.log(payload)
            setVisible(true);
            payloadRef.current = payload;
        };
        return () => (Modal4.show = lastShow);
    }, []);
    const wrapWithClose = (method) => () => {
        setVisible(false);
        method && method();
    };

    return (
        <Modal
            title="方案四"
            visible={visible}
            onOk={wrapWithClose(payloadRef.current.onOk)}
            onCancel={wrapWithClose(payloadRef.current.onCancel)}
        >
            <div>
                Modal4
            </div>
        </Modal>
    );

});

export default Modal4;