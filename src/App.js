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

function updateLayout (string) {
  if(string==='home') setActivePage('home')
}

return(
    <Styled.Container>
    <Styled.Header>
    <Title updateLayout={updateLayout}/>
    <Styled.Bar>
            <Styled.MenuItem  onClick={() => setActivePage('home')}><NavLink to="/" style={{ textDecoration: 'none' , color: 'black'}}>HOME</NavLink></Styled.MenuItem>  
            <Styled.MenuItem onClick={() => setActivePage('faq')}><NavLink to="/faq" style={{ textDecoration: 'none',  color: 'black' }}>FAQ</NavLink></Styled.MenuItem>
            <Styled.MenuItem onClick={() => setActivePage('contact')}><NavLink to="/contact" style={{ textDecoration: 'none',  color: 'black' }}>CONTACT</NavLink></Styled.MenuItem>
    </Styled.Bar>
    </Styled.Header>
            {/* -----CONTENT----- */}
          <Layout activePage={activePage}/>
            {/* -----CONTENT----- */}

    </Styled.Container>
  )
}

export default App;