import { useState } from 'react'
import imgVirar from '../img/seta_virar.png'

export default function Pergunta(props){
    const [viraPergunta, setViraPergunta] = useState(false)

    function virarPergunta(){
        if(viraPergunta === false){
            setViraPergunta(true);
        }else{
            setViraPergunta(false);
        }

    }
    
    return(
        <>
            {
               !viraPergunta ? (
                <li className="pergunta-aberta">{props.questao}
                    <img src={imgVirar} onClick={virarPergunta}></img>
                </li>
                ):(
                <li className="pergunta-aberta">{props.resposta}
                    <div className="container-botoes">
                        <button onClick={()=>props.riscarTexto('#FF3030',props.datakey)} className="nao-lembrei">Não lembrei</button>
                        <button onClick={()=>props.riscarTexto('#FF922E',props.datakey)} className="quase-nao">Quase não lembrei</button>
                        <button onClick={()=>props.riscarTexto('#2FBE34',props.datakey)} className="zap">Zap!</button>
                    </div>
                </li>
                ) 
            }
            
            {/**/}
            
            
        </>
    )
}

