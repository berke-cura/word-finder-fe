import * as Styled from './style'
import React, { useState, useEffect } from 'react';
import RICIBs from 'react-individual-character-input-boxes';

const SearchWord =  () => {
    const [letterCount, setLetterCount] = useState(1)
    const [inputProps, setInputProps] = useState([])
    const [existLetters, setExistLetters] = useState([])
    const [notExistLet, setNotExistLet] = useState([])
    const [placementLetters, setPlacementLetters] = useState([])

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

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        //console.log(searchInfo); 
      };


       const handlePlacement = (string) => {
        console.log(string)
        //console.log(string); 
      };
      const onChangeHandle = (event) => {
        const count = event.target.value;
        setLetterCount(parseInt(count))
      }
      
      useEffect(()=> {
        if(letterCount < 1 ) {
          setInputProps([])
        }
        else{
        const dummy  = Array(letterCount).fill({style: inputStyle})
        var r = dummy.map((item, i) => {
          return { style: inputStyle}
        })
        
         setInputProps(r)
        }
      }, [letterCount])


    return (
        <Styled.Container>
          <Styled.InputArea>

              <Styled.InputContainer>
              <Styled.Label1>Letter Count</Styled.Label1>
                        <Styled.Group>
                          <Styled.CounterButton onClick={()=> setLetterCount(letterCount+1)}>+</Styled.CounterButton>
                                <Styled.InputSulo min="1" max="22" type="number" name="letterCount" placeholder="1" id="logemail" autoComplete="off" value={letterCount} onChange={(event => onChangeHandle(event))} />
                          <Styled.CounterButton onClick={()=> setLetterCount(letterCount-1)}>-</Styled.CounterButton>

                        </Styled.Group>
              </Styled.InputContainer>
              <Styled.InputContainer>
                    <Styled.Label1>Placement Letters:</Styled.Label1>
                    <Styled.Group>
                    <RICIBs
                     amount={letterCount === 0 ? 1 : letterCount}
                     autoFocus
                     inputProps={inputProps}
                     handleOutputString={handlePlacement}
                     inputRegExp={/^[A-Za-z][A-Za-z0-9]*$/}
                   />
                  </Styled.Group>
                
                </Styled.InputContainer>
                   
              <Styled.InputContainer>
                   <Styled.Label1>Existing Letters</Styled.Label1>
                   <Styled.Group>
                   <Styled.InputLetters type="text" name="letterCount" placeholder="a,b,c,d,e" id="logemail" autoComplete="off"/>
                  </Styled.Group>
                   
              </Styled.InputContainer>
          
              <Styled.InputContainer>
                    <Styled.Label1>Not Existing Letters:</Styled.Label1>
                    <Styled.Group>
                   <Styled.InputLetters type="text" name="letterCount" placeholder="a,b,c,d,e" id="logemail" autoComplete="off"/>
                  </Styled.Group>
                  
                </Styled.InputContainer>
               

          </Styled.InputArea>


          <Styled.SearchButton onClick={handleSubmit}>SEARCH</Styled.SearchButton>
          
        </Styled.Container>
    )
}
export default SearchWord