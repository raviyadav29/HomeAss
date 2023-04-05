import React, { useState } from 'react'
import B from './B'
import myContext from './context'

function A() {
    const [data, setData] = useState("");
    const [state, setState] = useState("");
    return (
        <div>
            <input type='text' placeholder='Enter The Text' onChange={(e) => { setData(e.target.value) }} />
            <button onClick={() => { setState(data) }}>Send Data</button>
            <myContext.Provider value={state}>
                <B />
            </myContext.Provider>
        </div>
    )
}

export default A