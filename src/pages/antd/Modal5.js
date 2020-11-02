import React, { memo, useState, useRef, useEffect } from "react";
import { Modal } from "antd";

function useModal(m) {
    const [visible, setVisible] = useState(false);
    const payloadRef = useRef({});
    useEffect(() => {
        const lastShow = m.show;
        m.show = (payload) => {
            console.log(payload)
            setVisible(true);
            payloadRef.current = payload;
        };
        return () => (m.show = lastShow);
    }, []);
    const wrapWithClose = (method) => () => {
        setVisible(false);
        method && method();
    };

    return {
        visible,
        onOk: wrapWithClose(payloadRef.current.onOk),
        onCancel: wrapWithClose(payloadRef.current.onCancel)
    }
}

const Modal5 = memo((props, ref) => {
    // const [visible, setVisible] = useState(false);
    // const payloadRef = useRef({});
    // useEffect(() => {
    //     const lastShow = Modal5.show;
    //     Modal5.show = (payload) => {
    //         console.log(payload)
    //         setVisible(true);
    //         payloadRef.current = payload;
    //     };
    //     return () => (Modal5.show = lastShow);
    // }, []);
    // const wrapWithClose = (method) => () => {
    //     setVisible(false);
    //     method && method();
    // };
    const { visible, onOk, onCancel } = useModal(Modal5);
    // console.log('Modal5', payloadRef, props)
    return (
        <Modal
            title="方案四"
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
        >
            <div>
                Modal5
            </div>
        </Modal>
    );
});


export default Modal5;