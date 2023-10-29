import React from 'react'

function Functionalevent() {

    function eventhandler() {
        console.log("wlcm back");
    }
    return (
        <div>
            <button onClick={eventhandler}>Click anywhere</button>
        </div>
    )
}

export default Functionalevent
