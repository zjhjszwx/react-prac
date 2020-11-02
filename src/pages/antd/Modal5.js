import React, { memo, useState, useRef, useEffect } from "react";
import { Modal } from "antd";

// const Modal5 = memo((props, ref) => {
//     const [visible, setVisible] = useState(false);
//     const payloadRef = useRef({});
//     useEffect(() => {
//         const lastShow = Modal5.show;
//         Modal5.show = (payload) => {
//             console.log(payload)
//             setVisible(true);
//             payloadRef.current = payload;
//         };
//         return () => (Modal5.show = lastShow);
//     }, []);
//     const wrapWithClose = (method) => () => {
//         setVisible(false);
//         method && method();
//     };
//     console.log('Modal5', payloadRef, props)
//     return (
//         <Modal
//             title="方案四"
//             visible={visible}
//             onOk={wrapWithClose(payloadRef.current.onOk)}
//             onCancel={wrapWithClose(payloadRef.current.onCancel)}
//         >
//             <div>
//                 Modal5
//             </div>
//         </Modal>
//     );
//     return props.children
// });
function Modal5(WrappedComponent) {
    return (props) => {
        const [visible, setVisible] = useState(false);
        const payloadRef = useRef({});
        useEffect(() => {
            const lastShow = WrappedComponent.show;
            WrappedComponent.show = (payload) => {
                setVisible(true);
                payloadRef.current = payload;
            };
            return () => (WrappedComponent.show = lastShow);
        }, []);

        const wrapWithClose = (method) => () => {
            setVisible(false);
            method && method();
        };

        return <WrappedComponent
            {...props}
            visible={visible}
            onCancel={wrapWithClose(payloadRef.current.onCancel)}
            onOk={wrapWithClose(payloadRef.current.onOk)}
        />;
    }
}

export default Modal5;