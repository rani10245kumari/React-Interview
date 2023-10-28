import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
function Axioscompo() {
    const [user, setUser] = useState;
    useEffect(() => {
        axios.get('')
            .then((response) => setUser(response.data))
            .catch((err) => console.log(err))
    }, [])
    console.log(user);
    return (
        <>

        </>
    )
} export default Axioscompo