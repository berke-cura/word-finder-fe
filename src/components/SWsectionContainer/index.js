import * as Styled from './style'
import { SearchWord } from '..'



const SWsectionContainer =  () => {

    return (
        <Styled.Background>
            <Styled.Box itemScope itemType ="https://schema.org/CheckAction">
            <meta property="og:title" content="MEVZOO Advanced Word Finder" />
            <meta property="og:description" content="Find a word to solve puzzles and to win on Scrabble, Wordle" />
                <Styled.Title itemprop="name">Word Finder</Styled.Title>
                <SearchWord/>
            </Styled.Box>
        </Styled.Background>

    )
}

export default SWsectionContainer