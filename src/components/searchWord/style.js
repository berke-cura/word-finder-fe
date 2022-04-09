import styled from 'styled-components'



export const Form = styled.div`
  flex-direction: row;
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
        padding: 10px;
    }
 @media screen and (max-width: 768px) {
        width: 80%;
        padding: 10px;
        margin: auto;
        margin-top: 5%;
        font-size: 15px;
      }
  grid-row:1;
  background-color: #CEAB93;  
  padding: 10px;
  margin-left:5%;
  margin-top: 4%;
  border: 3px solid black;
  border-radius: 5px;
`

export const OutputArea = styled.div`
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
margin-left: 5%;
margin-bottom: 10px;

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
