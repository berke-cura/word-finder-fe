import * as Styled from './style'

const Result = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                width: '50%'

            }}
        />
    );
    return (
        <Styled.Container>
            <Styled.ResultContainer>
                <Styled.Title>Result</Styled.Title>
                <ColoredLine color="#636e72"/>
                <Styled.GradientBorder id="box" style={{display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '400px',
                      height: '200px',
                      color: 'white',
                      fontSize: '2.5rem'}}>
                    Animated <br/>CSS<br/>Gradient Border
                </Styled.GradientBorder>

            </Styled.ResultContainer>
        </Styled.Container>
    )

}

export default Result