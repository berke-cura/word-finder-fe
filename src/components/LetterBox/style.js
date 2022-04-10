import styled from 'styled-components'

export const LetterBox = styled.input.attrs({
  type: 'text',
  placeholder: '-',
  pattern: /^[a-zA-Z]+$/,
  maxLength: 1
})`
  text-align: center;
  margin:10px;
  border: 1px solid black;
  width: 30px;
  height: 30px;
`
