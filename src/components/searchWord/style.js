import styled from 'styled-components'



export const Container = styled.div`
@media only screen and (max-width: 600px) {
  flex-direction: column;
}
  flex-direction: row;
  display: flex;
`

export const InputArea = styled.div`
@media only screen and (max-width: 600px) {
  margin: 0px;
}
  border: 1px solid green;
  margin: 10px;
`

export const Label = styled.label`
text-align: center;
border: 1px solid black;
margin: 10px;
font-size: 30px;
`

export const InputContainer = styled.div`
flex-direction: column;
display:flex;
margin: 10px;
border: 1px solid red;
`

export const Group = styled.div`
display:inline-block;
margin: auto;
border: 0px solid blue;
`

export const GroupB = styled.div`
@media only screen and (max-width: 600px) {
  width: 320px;
}
text-align: center;
border: 0px solid blue;
margin: 10px;
width: 450px;
`

export const InputSulo = styled.input`
border: 1px solid black;
margin: 10px;
font-size: 30px;
width: 50px;
height: 50px;
text-align: center;
::-webkit-inner-spin-button{
  -webkit-appearance: none; }
::-webkit-outer-spin-button{
  -webkit-appearance: none; }  
`

export const SubmitButton = styled.button`
border: 3px solid purple;
cursor: pointer;
margin: 10px;
font-size: 30px;
`

export const CounterButton = styled.button`
border-radius: 500px;
border: 2px solid red;
background-color: white;
font-family: bolder;
font-size: 35px;
height: fit-content;
width: 55px;
&:hover {
};
`

export const InputLetters = styled.input`
text-align: center;
border-radius: 4px;
border: 1px solid red;
margin: 10px;
font-size: 30px;
`

