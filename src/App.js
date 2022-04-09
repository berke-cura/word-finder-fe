import React, {useState} from 'react';
import './App.css';
import * as Styled from './style'
import { SWsectionContainer, Title, FAQsectionContainer, COsectionContainer } from './components'
import {NavLink} from "react-router-dom";

const App = () => {

const [activePage, setActivePage ] = useState("home")

const Layout = ({activePage}) => {
  switch (activePage){
    case 'home' : return (<SWsectionContainer/>)
    case 'faq' : return(<FAQsectionContainer/>)
    case 'contact' : return(<COsectionContainer/>)
    default : return (<></>)
  }
}

return(
    <Styled.Container>
    <Title/>
    <Styled.Bar>
            <Styled.MenuItem onClick={() => setActivePage('home')}><NavLink to="/">TEXT</NavLink></Styled.MenuItem>  
            <Styled.MenuItem onClick={() => setActivePage('faq')}><NavLink to="/faq">TEXT</NavLink></Styled.MenuItem>
            <Styled.MenuItem onClick={() => setActivePage('contact')}><NavLink to="/contact">TEXT</NavLink></Styled.MenuItem>
    </Styled.Bar>
            {/* -----CONTENT----- */}
          <Layout activePage={activePage}/>
            {/* -----CONTENT----- */}

    </Styled.Container>
  )
}

export default App;