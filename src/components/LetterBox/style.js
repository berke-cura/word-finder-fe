import styled from 'styled-components'

export const LetterBox = styled.input.attrs({
  type: 'text',
  placeholder: '-',
  pattern: /^[a-zA-Z]+$/,
  maxLength: 1
})`
@media only screen and (max-width: 600px) {
  width: 30px;
  height: 30px;
  font-size: 20px;

}
  text-align: center;
  margin: 10px 5px;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  font-size: 30px;
`
