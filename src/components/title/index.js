import * as Styled from './style'
/* import { Helmet } from 'react-helmet'
 */

const Title =  ({updateLayout}) => {
    function onClickHandler () {
        updateLayout('home')
    }
    return (
       <Styled.TitleBox onClick={onClickHandler}>
{/*            <Helmet>
           <title>MEVZOO</title> 
           <meta name="description" content="App Description" />
           </Helmet> */}

           <Styled.Title>GETWORD <Styled.SubTitle>Advanced Word Finder</Styled.SubTitle></Styled.Title>
           </Styled.TitleBox>    
    )
}
export default Title