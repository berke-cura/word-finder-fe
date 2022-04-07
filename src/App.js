import './App.css';
import * as Styled from './style'
import { SectionContainer } from './components'
import { Sticky } from './components'
import { SearchWord } from './components'



const App = () => {

  return (
    
    <Styled.Container>
      <Sticky/>
      <SectionContainer>
        <SearchWord/>
      </SectionContainer>
    </Styled.Container>
  )
}

export default App;
