import { useState } from 'react'
import imgVirar from '../img/seta_virar.png'
import styled from 'styled-components';

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
                <PerguntaAberta data-test="flashcard-text">{props.questao}
                    <img src={imgVirar} onClick={virarPergunta}></img>
                </PerguntaAberta>
                ):(
                <PerguntaAberta data-test="flashcard-text">{props.resposta}
                    <ContainerBotoes>
                        <button data-test="no-btn" onClick={()=>props.riscarTexto('#FF3030',props.datakey)} className="nao-lembrei">Não lembrei</button>
                        <button data-test="partial-btn" onClick={()=>props.riscarTexto('#FF922E',props.datakey)} className="quase-nao">Quase não lembrei</button>
                        <button data-test="zap-btn" onClick={()=>props.riscarTexto('#2FBE34',props.datakey)} className="zap">Zap!</button>
                    </ContainerBotoes>
                </PerguntaAberta>
                ) 
            }
            
            {/**/}
            
            
        </>
    )
}
const PerguntaAberta = styled.li `
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    `
const ContainerBotoes =styled.div`
    display:flex;
    flex-direction: row;
    gap: 7px;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;
        padding:5px;
    }
    .nao-lembrei{
        background-color: #FF3030;
    }
    .quase-nao{
        background-color: #FF922E;
    }
    .zap{
        background-color: #2FBE34;
  }
`

