export default function Pergunta(props){
    
    return(
        <>
            <li className="pergunta-aberta">{props.questao}
            <div className="container-botoes">
                <button className="nao-lembrei">Não lembrei</button>
                <button className="quase-nao">Quase não lembrei</button>
                <button className="zap">Zap!</button>
            </div>
            </li>
            
        </>
    )
}

