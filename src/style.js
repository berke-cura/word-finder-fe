import styled from 'styled-components'

export const Container = styled.div`
background-color: white;
`

export const Header = styled.div`
display:flex ;
justify-content: space-between;
`

export const Bar = styled.div`
@media screen and (max-width: 768px) {
}
display:flex;
`

export const MenuItem = styled.p`
@media screen and (max-width: 768px) {
}
margin: auto;
border: 1px solid black;
margin-right: 10px;
&:hover {       
}
`