import * as Styled from './style'

const Title =  ({updateLayout}) => {
    function onClickHandler () {
        updateLayout('home')
    }
    return (
       <Styled.TitleBox onClick={onClickHandler}>
           <Styled.Title>WORD FINDER</Styled.Title>
           </Styled.TitleBox>    
    )
}
export default Title