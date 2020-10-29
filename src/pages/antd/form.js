import React, { useState, useMemo } from 'react'
import Hoc from './hoc'
import ModalDemo from './ModalDemo'
import {Button} from 'antd'

function useModal(initial) {
    const [visible, setVis] = useState(false);
    const open = () => {
        setVis(true);
    }
    const close = () => {
        setVis(false);
    }
    return { visible, open, close }
}
function Demo(props) {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const modal4 = useModal();

    console.log('render', modal4)

    return (
        <div>
            <Button onClick={() => setVisible(true)}>btn</Button>
            {visible && <ModalDemo visible={visible} onCancel={() => setVisible(false)} onOk={() => setVisible(false)} name="1" />}
            <Button onClick={() => setVisible1(true)}>btn1</Button>
            <ModalDemo visible={visible1} onCancel={() => setVisible1(false)} onOk={() => setVisible1(false)} name="2" />

            <Button onClick={() => props.open()}>btn2</Button>
            <ModalDemo visible={props.visible} onCancel={() => props.close()} onOk={() => props.open()} name="3" />
            <Button onClick={() => props.open()}>btn4</Button>
            <ModalDemo visible={modal4.visible} onCancel={() => modal4.close()} onOk={() => modal4.open()} name="4" />

        </div>
    )
}


export default Hoc(Demo)
