import styled from 'styled-components'



export const Container = styled.div`
@media only screen and (max-width: 600px) {
  flex-direction: column;
}
  flex-direction: row;
  display: flex;
`

export const InputArea = styled.div`
  border: 1px solid green;
  margin: 10px;
`

export const Label = styled.label`
text-align: center;
border: 1px solid black;
margin: 10px;
`

export const InputContainer = styled.div`
flex-direction: column;
display:flex;
margin: 10px;
border: 1px solid red;
`

export const Group = styled.div`
display:flex;
justify-content: center;
border: 1px solid blue;
margin: 10px;
`

export const InputSulo = styled.input`
border: 1px solid black;
margin: 10px;
height: 35px;
width: 35px;
text-align: center;
::-webkit-inner-spin-button{
  -webkit-appearance: none; }
::-webkit-outer-spin-button{
  -webkit-appearance: none; }  
`

export const SubmitButton = styled.button`
border: 1px solid purple;
cursor: pointer;
margin: 10px;
`

export const CounterButton = styled.button`
margin: 10px;
height: 35px;
width: 35px;
border-radius: 100px;
border: 1px solid red;
background-color: white;
&:hover {
};
`

export const InputLetters = styled.input`
text-align: center;
border-radius: 4px;
border: 1px solid red;
margin: 10px;
`

export const LetterPlace = styled.div`
max-width: 280px;
`