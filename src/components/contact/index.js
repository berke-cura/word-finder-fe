import { useState } from 'react'
import * as Styled from './style'



const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function submitHandler (){
        const body = {
            name,
            email,
            subject,
            message
        }
        const url = "https://backend_url"

        console.log(body)
        // Axios Request
    } 


    return(
        <Styled.Container>

            <Styled.InputForm>

                
                    <Styled.SingleInputContainer>
                        <Styled.InputTitle>Name</Styled.InputTitle>
                        <Styled.Input onChange={(event) => setName(event.target.value) }/> 
                    </Styled.SingleInputContainer>

                    <Styled.SingleInputContainer>
                        <Styled.InputTitle>Email</Styled.InputTitle>
                        <Styled.Input onChange={(event) => setEmail(event.target.value) }/>
                    </Styled.SingleInputContainer>

                    <Styled.SingleInputContainer>
                        <Styled.InputTitle>Subject</Styled.InputTitle>
                        <Styled.Input onChange={(event) => setSubject(event.target.value) } />
                    </Styled.SingleInputContainer>

                    <Styled.SingleInputContainer>
                        <Styled.InputTitle>Message</Styled.InputTitle>
                        <Styled.InputTextArea onChange={(event) => setMessage(event.target.value) } />
                    </Styled.SingleInputContainer>
                    
                    <Styled.SubmitButton onClick={submitHandler}> Submit </Styled.SubmitButton> 

            </Styled.InputForm>

      </Styled.Container>
        )
        
}
export default Contact