import React, { useState } from 'react'
function hoc(WrappedComponent) {

    return () => {

        const [vis, setVis] = useState(false);
        const open = () => {
            setVis(true);
        }
        const close = () => {
            setVis(false);
        }
        return <WrappedComponent visible={vis} open={open} close={close} />
    }
}

export default hoc
