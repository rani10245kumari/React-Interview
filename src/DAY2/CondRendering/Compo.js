import React from 'react'
function Compo() {
    return (
        <>
            <h2>Conditional rendering:</h2>
            <Com1></Com1>
            <Com2></Com2>
        </>
    )
}

export default Compo

function Com1() {
    return (
        <>
            <h1>This is first ParentComponent</h1>
        </>
    )
}


function Com2() {
    return (
        <>
            <h1>Thsi is second Compo</h1>
        </>
    )
}
