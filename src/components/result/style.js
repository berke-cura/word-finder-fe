import styled, { keyframes } from 'styled-components'


export const Container = styled.div`
    width: 46%;
    
`

export const GradientBorder = styled.div`
& {
position: relative;
width: 450px;
padding: 40px 0;
font-size: 5em;
color: #fff;
text-align: center;
letter-spacing: 5px;
background: #020117;
}
    &::after{
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: linear-gradient(45deg, #ffd800, #ff5520, #750cf2, #0cbcf2);
        z-index: -1;
    }
    &::before{
        content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #ffd800, #ff5520, #750cf2, #0cbcf2);
  z-index: -2;
  filter: blur(40px);
    }
`
export const ResultArea = styled.div`
    width: 70%;
    background-color: #f5e9ba;
    text-align: center;
    margin-left: 15%;
    height: 420px;
    border-radius: 15px;
    padding: 5px;
    margin-top: 25px;
    fonst-size: 30px;

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
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
rgba(0, 0, 0, 0.12) 0px -12px 30px, 
rgba(0, 0, 0, 0.12) 0px 4px 6px, 
rgba(0, 0, 0, 0.17) 0px 12px 13px, 
rgba(0, 0, 0, 0.09) 0px -3px 5px;
`