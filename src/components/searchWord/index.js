import * as Styled from './style'
import React, { useState } from 'react';


const SearchWord =  () => {
    
    
    const [searchInfo, setSearchInfo] = useState({
        letterCount: "",
        existLetters: "",
        notExistLet: "",
    });

    const handleChange = (event) => {
        setSearchInfo({ ...searchInfo, [event.target.name]: event.target.value });
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
          <div><label>{(i+1) + ".Letter"}</label><input type="text" name={(i+1)} key={i+1}
          onChange={handleChange} placeholder={(i+1) + ". Letter" }/></div>
          )
        }
        return inputs;
       }
    
    return (
        <Styled.Form>
            <label>Letter Count</label>
            <input
            type="text"
            name="letterCount"
            placeholder="Letter Count"
            value={searchInfo.letterCount}
            onChange={handleChange}
          /><p/>

            <label>Existing Letters</label>
          <input
            type="text"
            name="existLetters"
            placeholder="Existing Letters"
            value={searchInfo.existLetters}
            onChange={handleChange}
          /><p/>

         <label>Not Existing Letters</label>
          <input
            type="text"
            name="notExistLet"
            placeholder="Not Existing Letters"
            value={searchInfo.notExistLet}
            onChange={handleChange}
          />
        <div>{renderInputs(searchInfo.letterCount)}</div>

          <p/>
            <button onClick={handleSubmit}>SEARCH</button>
        </Styled.Form>
    )
}
export default SearchWord