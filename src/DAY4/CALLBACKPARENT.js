import React, { useCallback, useState } from 'react'

function CALLBACKPARENT() {
    const [data, setData] = useState(0);
    const [count, setCount] = useState(10);
    const Increment = useCallback(() => {
        setData(data + 10);
    }, [data])
    return (
        <>
            <Child send={Increment} />
            <h2>Data value{data}</h2>
            <button onClick={() => setData(data + 1)}>parent add</button>
            <h2>Count value{count}</h2>
            <button onClick={() => setCount(count - 5)}>dec</button>

        </>
    )
}

export default CALLBACKPARENT
