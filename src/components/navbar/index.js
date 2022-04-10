import React from 'react'
import {
    Route,
    NavLink,
    HashRouter,
    Routes,
  
} from "react-router-dom";
import * as Styled from './style'
import Home from "../searchWord"
import Faq from "../faq"
import Contact from "../contact"

const NavBar =  () => {

    return (
            <HashRouter>

            <Styled.Bar>

            <Styled.MenuItem><NavLink to="../seachWord">HOME</NavLink></Styled.MenuItem>
               
            <Styled.MenuItem><NavLink to="../faq">FAQ</NavLink></Styled.MenuItem>
            
            <Styled.MenuItem><NavLink to="../contact">CONTACT</NavLink></Styled.MenuItem>

            </Styled.Bar>

            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/faq" element={<Faq/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            
            </HashRouter>
            
        )
    }
        
    
export default NavBar