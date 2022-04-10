import * as Styled from './style'


const Result = ({words}) => {
    
    //const words = ["albacora","albacore","albahaca","albrecht","ambracan","ambsaces","arboloco","arbuscle","babouche","babracot","bobachee","caballed","caballer","caballos","cabarets","cabasset","cabassou","cabbaged","cabbages","cabbalah","cabbalas","cabecera","cabecudo","cabernet","cabestro","cabezone","cabezons","cableman","cablemen","cableway","caboceer","caboched","cabochon","caboclos","cabombas","caboodle","cabooses","caboshed","cabossed","cabotage","cabresta","cabresto","cabretta","cabreuva","cabstand","cobleman","cubalaya","cubangle","cubatory","cubature","cubehead","debacles","emblanch","embraced","embracer","embraces","embreach","fabaceae","labefact","labrusca","mobocrat","nabcheat","nubecula","poblacht","rebleach","rebraced","rebranch","rebroach","sebacate","subacute","subcaste","subcause","subchela","subclans","subclass","subcosta","subfocal","subocean","subraces","subscale","subspace","subtract","subucula","subvocal","tabanuco","tobaccoy","tobaccos","umbecast","umbeclad","umbracle","unbacked","unbraced","unbraces"]
    
    return (
        <Styled.Container>
            <Styled.Title>Result</Styled.Title>
            <Styled.ResultContainer
                readOnly={true}
                defaultValue={words.toString().split(",").join("\n")}
            />
        </Styled.Container>
    )
}

export default Result