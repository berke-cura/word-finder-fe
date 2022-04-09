import styled from 'styled-components'



export const Container = styled.div`
  flex-direction: row;
  margin-top: 1.45%;

  @media screen and (max-width: 768px) {
        width: 80%;
        padding: 10px;
        margin: auto;
        margin-top: 5%;
        font-size: 15px;
        flex-direction: column;
      }
  display: flex;
    &:focus {
    
}
`

export const InputArea = styled.div`
 @media screen and (max-width: 1024) {
        width: 50%;
    }
 @media screen and (max-width: 768px) {
        width: 80%;
        font-size: 15px;
      }
  background-color: #ecf0f1;
  margin-left: 20px;
  margin-top: 20px;
  width: 50%;
 box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
   rgba(0, 0, 0, 0.12) 0px -12px 30px, 
   rgba(0, 0, 0, 0.12) 0px 4px 6px, 
   rgba(0, 0, 0, 0.17) 0px 12px 13px, 
   rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const ResultContainer = styled.div`
  background-color: #CEAB93;  
  padding: 160px;
  margin-left:5%;
  margin-top: 4%;
  border: 3px solid black;
  border-radius: 5px;
  grid-row: 1;
`

export const LetterBoxes = styled.div`
grid-row:2;
display: inline-flex;
margin: auto;
margin-top: 3%;
/* background-color: #CEAB93; */  
border-radius: 5px;
`

export const LetterInput = styled.input`
border: 3px solid #AD8B73;
width: 35px;
height: 35px;
margin: 2px;
margin-top: 5px;
margin-bottom: 5px;
border-radius: 5px;
font-size: 30px;
`


export const SearchButton = styled.button`
grid-row:3;
margin: auto;
margin-top: 3%;
border: 3px solid black;
background-color: #CEAB93;
font-weight: bolder;
font-size: 20px;
border-radius: 5px;
padding: 12px 24px;
text-decoration: none;
cursor: pointer;
`

export const Input1 = styled.input`
border: 3px solid #AD8B73;
width: 30px;
height: 20px;
margin: 15px;
margin-top: 15px;
margin-bottom: 10px;
border-radius: 5px;
`
export const Label1 = styled.label`
font-size: 20px;
font-weight: bolder;
margin-bottom: 10px;
flex: 1;
display: flex;
width: 100%;
text-align: center;
justify-content: center;
`



export const Input2 = styled.input`
border: 3px solid #AD8B73;
width: 70px;
height: 20px;
margin: 15px;
margin-top: 5px;
margin-bottom: 5px;
border-radius: 5px;
margin-bottom: 10px;

`
export const Label2 = styled.label`
font-size: 20px;
font-weight: bolder;
margin-left: 5%;
margin-bottom: 10px;

`




export const Input3 = styled.input`
border: 3px solid #AD8B73;
width: 70px;
height: 20px;
margin: 15px;
margin-top: 5px;
margin-bottom: 5px;
border-radius: 5px;
margin-bottom: 10px;

`
export const Label3 = styled.label`
font-size: 20px;
font-weight: bolder;
margin-left: 5%;
margin-bottom: 10px;

`

export const InputContainer = styled.div`
flex-direction: column;
display:flex;
padding: 10px;
`

export const Group = styled.div`
flex-direction: row;
display:flex;
justify-content: center;
padding: 1rem;
`
export const InputSulo = styled.input`
  padding: 13px 20px;
  height: 32px;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 10%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
}
::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
}  
`

export const CounterButton = styled.button`
display: flex;
margin-left: 0.2rem;
margin-right: 0.2rem;
height: 58px;
align-items: center;
text-align: center;
justify-content: center;
width: 15%;
font-weight: 500;
border-radius: 4px;
font-size: 18px;
line-height: 28px;
letter-spacing: 0.5px;
outline: none;
color: #c4c3ca;
background-color: #343645;
border: none;
transition: all 200ms linear;
box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
&:hover {
  background-color: #3f4254;
};
`

export const InputLetters = styled.input`
  padding: 13px 20px;
  height: 32px;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 70%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
`