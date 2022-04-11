import * as Styled from './style'

const Title =  ({updateLayout}) => {
    function onClickHandler () {
        updateLayout('home')
    }
    return (
       <Styled.TitleBox onClick={onClickHandler}>
           <Styled.Title>MEVZOO <Styled.SubTitle>Advanced Word Finder</Styled.SubTitle></Styled.Title>
           </Styled.TitleBox>    
    )
}
export default Title