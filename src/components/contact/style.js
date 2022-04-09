import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 1.45%;
    padding: 5% 20% 0% 20%;
`

export const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 600px) {
    }
`


export const SubmitButton = styled.button`
    margin-top: 1.45%;
    height: auto;
    font-size: 30px;
    background-color: #AD8B73;
    border-radius: 6px;
`

export const SingleInputContainer = styled.div`
    padding: 20px;
    @media only screen and (max-width: 600px) {
        padding: 10px 0px 20px 0px;

    }
`

export const Input = styled.input`
border: 1px solid #AD8B73;
border-radius: 6px;
font-size: 20px;
padding: 10px 10px 10px 10px;

`

export const InputTitle = styled.label`
text-align: center;
font-size: 30px;
display: inline-block;
width: 150px;
margin-right: 20px;
background-color: #AD8B73;
border-radius: 6px;
padding: 5px 10px 5px 10px;
@media only screen and (max-width: 600px) {
margin-bottom: 5px;
font-size: 20px;
padding: 0px 0px 0px 0px;

}`

export const InputTextArea = styled.textarea`
border: 1px solid #AD8B73;
border-radius: 6px;
width: 500px;
height: 100px;
display: flex;
margin-top: 20px;
font-size: 30px;
@media only screen and (max-width: 600px) {
display: block;
width: 130%;
align-self: auto;
font-size: 10px;
padding: 0px 0px 0px 0px;


}
`
