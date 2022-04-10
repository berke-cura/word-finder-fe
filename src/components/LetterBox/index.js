import {useState} from 'react';
import * as Styled from './style';

const LetterBox = (props) => {
    const [letter, setLetter] = useState("")

    function onChangeHandler (event) {
        
        setLetter(event.target.value)
        const data={letter: event.target.value, id: props.id}
        props.sendData(data);
    }
    

    return (
      <>
        <Styled.LetterBox type="text" maxLength="1" onChange={onChangeHandler} value={letter} pattern="/^[a-zA-Z]+$/"/>
      </>
    )
  }

export default LetterBox;