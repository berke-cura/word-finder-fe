import * as Styled from './style'
import React, { useState } from 'react';


const SearchWord =  () => {
    const [searchInfo, setSearchInfo] = useState({
        letterCount: "",
        existLetters: "",
        notExistLet: "",
    });

    const handleChange = (event) => {
        setSearchInfo({ ...searchInfo, [event.target.name]: (event.target.value)});
    };
   
    const handleChangeA = (event) => {
      let { value, max } = event.target;
      value = Math.max(Math.min(Number(max), Number(value)));
      setSearchInfo({ ...searchInfo, [event.target.name]: value });
  };

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(searchInfo);
      };


    function renderInputs(value){
        const inputs=[];
        for(let i=0; i<value; i++){
          inputs.push(
          <Styled.LetterBoxes>
          <Styled.LetterInput className='LetterBox'
            size='5'
            type="text"
            name={(i+1)}
            onChange={handleChange}
            maxLength="1"
            placeholder={(i+1) + "."}
          />
          </Styled.LetterBoxes>
          )
        }
        return inputs;
       }
    
    return (
        <Styled.Form>
          <Styled.InputArea>
          <Styled.Label1>Letter Count:</Styled.Label1>
          <Styled.Input1
            type="number"
            name="letterCount"
            value={searchInfo.letterCount}
            onChange={handleChangeA}
            max="22"
          /><p/>

          <Styled.Label2>Existing Letters:</Styled.Label2>
          <Styled.Input2
            type="text"
            name="existLetters"
            placeholder="a,d,n"
            value={(searchInfo.existLetters)}
            onChange={handleChange}
          /><p/>

          <Styled.Label3>Not Existing Letters:</Styled.Label3>
          <Styled.Input3
            type="text"
            name="notExistLet"
            placeholder="c,b"
            value={(searchInfo.notExistLet)}
            onChange={handleChange}
          />
          </Styled.InputArea>
          <Styled.OutputArea>
            <p>asd</p>
          </Styled.OutputArea>
          <Styled.LetterBoxes>
            <div>{renderInputs(searchInfo.letterCount)}</div>
          </Styled.LetterBoxes>
          <Styled.SearchButton onClick={handleSubmit}>SEARCH
{/*             <button onClick={handleSubmit}>SEARCH</button>
 */}          </Styled.SearchButton>
        </Styled.Form>
    )
}
export default SearchWord