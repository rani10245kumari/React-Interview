import React, { useState, useCallback } from 'react'

function Colorcom() {
    // const [colour, setColour] = useState("grey")
    const [length, setLength] = useState(8)
    const [numbercontain, setNumbercontain] = useState(false)
    const [charactercontain, setCharactercontain] = useState(false)
    const [Password, setPassword] = useState("")

    const PasswordGenerator = () => {

    }

    return (
        <>
            {/* <div style={{ backgroundColor: colour }} className='mini'>
            </ div> */}
            <div className='mini'>
                <h2>Password Generator</h2>
            </div>

        </>
    )
}

export default Colorcom
