import './App.css';
import * as Styled from './style'
import { SectionContainer } from './components'
import { Title } from './components'
import { SearchWord } from './components'
import { Faq } from './components'
import { Contact } from './components'

import {
  Route,
  NavLink,
  HashRouter,
  Routes,

} from "react-router-dom";


const App = () => {

return(
    <HashRouter>
    <Styled.Container>
    <Title/>
    <Styled.Bar>
            <Styled.MenuItem><NavLink to="/">TEXT</NavLink></Styled.MenuItem>  
            <Styled.MenuItem><NavLink to="/faq">TEXT</NavLink></Styled.MenuItem>
            <Styled.MenuItem><NavLink to="/contact">TEXT</NavLink></Styled.MenuItem>
    </Styled.Bar>
    <SectionContainer>
            <Route exact path="/" element={<SearchWord/>}></Route>
            <Route path="/faq" element={<Faq/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
    </SectionContainer>
    </Styled.Container>
    </HashRouter>
  )
}

export default App;