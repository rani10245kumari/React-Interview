import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Student from './Student'

function RouterCompo() {
    return (
        <>
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/Student">Student</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/About">About</Link>
                <Routes>
                    <Route path="" element={<Home></Home>}></Route>
                    <Route path="/Student" element={<Student></Student>} ></Route>
                    <Route path='/Contact' element={<Contact></Contact>} ></Route>
                    <Route path='/About' element={<About></About>} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterCompo
