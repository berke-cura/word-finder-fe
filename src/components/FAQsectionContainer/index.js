import * as Styled from './style'
import { Faq } from '..'



const FAQsectionContainer =  () => {

    return (
        <Styled.Background>
            <Styled.Box>
                <Styled.Title>FAQ</Styled.Title>
                <Faq/>
            </Styled.Box>
        </Styled.Background>
    )
}

export default FAQsectionContainer