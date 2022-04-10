import styled from 'styled-components'



export const Container = styled.div`
    width: 46%;
    
`

export const Title = styled.div`
padding-top: 40px;
font-size: 32px;
font-weight: bolder;
margin-bottom: 10px;
flex: 1;
display: flex;
width: 100%;
text-align: center;
justify-content: center;
    
`
export const ResultContainer = styled.div`
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
width: 100%;
height: 38rem;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
rgba(0, 0, 0, 0.12) 0px -12px 30px, 
rgba(0, 0, 0, 0.12) 0px 4px 6px, 
rgba(0, 0, 0, 0.17) 0px 12px 13px, 
rgba(0, 0, 0, 0.09) 0px -3px 5px;
`