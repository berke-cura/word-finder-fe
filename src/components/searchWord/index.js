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
          <div><label>{(i+1) + ".Letter:"}</label><input 
          type="text"
          name={(i+1)}
          onChange={handleChange}
          maxLength="1"
          /></div>
          )
        }
        return inputs;
       }
    
    return (
        <Styled.Form>
          <label>Letter Count:</label>
          <input
            type="number"
            name="letterCount"
            value={searchInfo.letterCount}
            onChange={handleChangeA}
            max="22"
          /><p/>

          <label>Existing Letters:</label>
          <input
            type="text"
            name="existLetters"
            placeholder="a,d,n"
            value={(searchInfo.existLetters)}
            onChange={handleChange}
          /><p/>

          <label>Not Existing Letters:</label>
          <input
            type="text"
            name="notExistLet"
            placeholder="c,b"
            value={(searchInfo.notExistLet)}
            onChange={handleChange}
          />
          <div>{renderInputs(searchInfo.letterCount)}</div>
          <button onClick={handleSubmit}>SEARCH</button>
        </Styled.Form>
    )
}
export default SearchWord