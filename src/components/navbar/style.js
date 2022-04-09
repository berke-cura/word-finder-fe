import styled from 'styled-components'

export const Bar = styled.div`
    @media screen and (max-width: 768px) {
        height: 5.2vh; 
    }
    display: flex;
    background-color: #CEAB93;
    color: black;
    font-weight: bold;
    padding: auto;

`
export const MenuItem = styled.div`
@media screen and (max-width: 768px) {
        font-size: 13px;
        padding: 0px 10px;
        letter-spacing: 0.0em;

    }
    letter-spacing: 0.2em;
    height: 5.2vh;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 0px 10px;
    background-color: #FFFBE9;
    &:hover {
        background-color: #AD8B73;
    }
`
