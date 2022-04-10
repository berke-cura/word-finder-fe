import * as Styled from './style'
import React, { useState, useEffect } from 'react';
import { SectionContainer } from '../../components'
import LetterBox from '../LetterBox';
import Result from '../result'
import axios from 'axios';

const SearchWord =  () => {
    const [letterCount, setLetterCount] = useState(2)
    const [inputProps, setInputProps] = useState([])
    const [existLetters, setExistLetters] = useState([])
    const [notExistLetter, setNotExistLetter] = useState([])
    const [placementLetters, setPlacementLetters] = useState( Array(15).fill("-"))
    const inputStyle = {
      "padding": "13px 20px",
      "height": "32px",
      "alignItems": "center",
      "textAlign": "center",
      "justifyContent": "center",
      "width": "30px",
      "fontWeight": "500",
      "borderRadius": "4px",
      "fontSize": "18px",
      "lineHeight": "28px",
      "letterSpacing": "0.5px",
      "outline": "none",
      "color": "#c4c3ca",
      "backgroundColor": "#1f2029",
      "border": "none",
      "WebkitTransition": "all 200ms linear",
      "transition": "all 200ms linear",
      "boxShadow": "0 4px 8px 0 rgba(21,21,21,.2)",
    }

      const onChangeHandle = (event) => {
        const count = event.target.value;
        if(count > 15) setLetterCount(15)
        if(count < 2) setLetterCount(2)
        if(count < 15 && count >= 0 ) setLetterCount(parseInt(count))
      }
      
      useEffect(()=> {
        if(letterCount < 1 ) {
          setInputProps([])
        }
        else{
          console.log(letterCount)
          var dummy = []
        if(isNaN(letterCount)) {
          dummy  = Array(2).fill({style: inputStyle})
          setLetterCount(2)
        }
        else dummy  = Array(letterCount).fill({style: inputStyle})
        var r = dummy.map((item, i) => {
          return { style: inputStyle}
        })
         setInputProps(r)
        }
      }, [letterCount])
      function getData (value) {
        let array = placementLetters
        array[value.id] = value.letter
       
      }

      function handleOnClick() {
        console.log('exist: ', existLetters)
        console.log('not exist:' , notExistLetter)
        const a = placementLetters.map((item, i) => {
          if(item !=="-"){
            const b = {
              place: i,
              letter: item,
            }
            return b
          }
        })
        const c = a.filter(item => item);

        var data = JSON.stringify({
          letterCount: letterCount,
          existingLetter: existLetters.split(''),
          notExistingLetter: notExistLetter.split(''),
          letterPlace: c
        });
        
        var config = {
          method: 'post',
          url: 'https://word-finder-backend-app.herokuapp.com/',
          headers: { 
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then((response)=> {
          console.log(JSON.stringify(response.data));
        })
        .catch( (err) => {
          console.log(err);
        });
      }
  
    return (
        <Styled.Container>

          <Styled.InputArea>

              <Styled.InputContainer>
              <Styled.Label>Letter Count</Styled.Label>
                        <Styled.Group>
                          <Styled.CounterButton onClick={()=>  letterCount< 15 ? setLetterCount(letterCount+1) : setLetterCount(letterCount)}>+</Styled.CounterButton>
                                <Styled.InputSulo type="number" name="letterCount" placeholder="1" id="logemail" autoComplete="off" value={letterCount} onChange={(event => onChangeHandle(event))} />
                          <Styled.CounterButton onClick={()=> letterCount > 0 ? setLetterCount(letterCount-1): setLetterCount(letterCount)}>-</Styled.CounterButton>

                        </Styled.Group>
              </Styled.InputContainer>
              <Styled.InputContainer>
                    <Styled.Label>Placement Letters:</Styled.Label>
                    <Styled.Group>
                        {
                          
                          Array.from( Array(letterCount > 0 ? letterCount : 1), (e, i) => {
                            return  <LetterBox id={i} sendData={getData}/>
                        })}
                  </Styled.Group>
                
                </Styled.InputContainer>
                   
              <Styled.InputContainer>
                   <Styled.Label>Existing Letters</Styled.Label>
                   <Styled.Group>
                   <Styled.InputLetters type="text" value={existLetters} name="letterCount" placeholder="a,b,c,d,e" id="logemail" autoComplete="off" onChange={(event)=> setExistLetters(event.target.value)}/>
                  </Styled.Group>
                   
              </Styled.InputContainer>
          
              <Styled.InputContainer>
                    <Styled.Label>Not Existing Letters:</Styled.Label>
                    <Styled.Group>
                   <Styled.InputLetters type="text" name="letterCount" placeholder="a,b,c,d,e" id="logemail" autoComplete="off"  onChange={(event)=> setNotExistLetter(event.target.value)}/>
                  </Styled.Group>
                  
                </Styled.InputContainer>
                
                <Styled.InputContainer>
                    <Styled.Group>
                   <Styled.SubmitButton onClick={handleOnClick}> Search</Styled.SubmitButton>
                  </Styled.Group>
                  
                </Styled.InputContainer>
               
                    
          </Styled.InputArea>

          <Result/> 

        </Styled.Container>
        
    )
}
export default SearchWord