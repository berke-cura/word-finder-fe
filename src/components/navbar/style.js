import styled from 'styled-components'

export const Bar = styled.div`
    @media screen and (max-width: 768px) {
        height: 5.2vh; 
        padding-left: 10%;
        padding-right: 10%;
    }
    display: flex;
    background-color: #CEAB93;
    color: black;
    font-weight: bold;
    padding-left: 30%;
    padding-right: 30%;
    overflow: hidden;
`
export const MenuItem = styled.div`
@media screen and (max-width: 768px) {
        font-size: 13px;
        padding: 0px 10px;
        letter-spacing: 0.0em;

    }
    top: 5px;
    letter-spacing: 0.2em;
    height: 5.2vh;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 0px 10px;
    background-color: #FFFBE9;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    &:hover {
        background-color: #AD8B73;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }
`


