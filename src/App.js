import './App.css';
import * as Styled from './style'
import { Title } from './components'
import { NavBar } from './components'
import { SectionContainer } from './components'
import { Sticky } from './components'



const App = () => {

  return (
    <Styled.Container>
      <Sticky/>
      {/* <Title/>
      <NavBar/>
      </Sticky> */}
      <SectionContainer>
      </SectionContainer>
    
      

    </Styled.Container>
  )
}

export default App;
