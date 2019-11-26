import React, { createContext, useState, useContext } from 'react';
import { Button } from 'antd';
const context = createContext({});
function CounterProvider({ children }) {
    const [counter, setCounter] = useState(0);
    const value = {
        counter,
        setCounter,
        increment: () => setCounter(counter + 1),
        decrement: () => setCounter(counter - 1)
    };

    return <context.Provider value={value}>{children}</context.Provider>;
}

function Counter() {
    const { counter = 0, increment, decrement } = useContext(context);
    return (
        <div>
            <Button onClick={decrement}>递减</Button>
            <Button onClick={increment}>递增</Button>
            {counter}
        </div>
    );
}
const UseContext = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <CounterProvider>
                <Counter />
            </CounterProvider>
        </div>
    );
};

export default UseContext;
