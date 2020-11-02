import React, { useState, useMemo } from 'react'
import Hoc from './hoc'
import ModalDemo from './ModalDemo'
import { Button } from 'antd'
import Modal4 from './Modal4';
import Modal5 from './Modal5';
function Demo(props) {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);

    console.log('form')
    return (
        <div>
            <Button onClick={() => setVisible(true)}>btn</Button>
            <ModalDemo visible={visible} onCancel={() => setVisible(false)} onOk={() => setVisible(false)} name="1" />
            <Button onClick={() => setVisible1(true)}>btn1</Button>
            <ModalDemo visible={visible1} onCancel={() => setVisible1(false)} onOk={() => setVisible1(false)} name="2" />

            <Button onClick={() => props.open()}>btn2</Button>
            <ModalDemo visible={props.visible} onCancel={() => props.close()} onOk={() => props.open()} name="3" />
            <Button onClick={() => Modal4.show({ onOk: () => { console.log('ok....') } })}> btn4 </Button>
            <Modal4 />
            <Button onClick={() => Modal5.show({ onOk: () => { console.log('modal 5 ok....') } })}> btn5 </Button>
            <Modal5 />

        </div>
    )
}


export default Hoc(Demo)
