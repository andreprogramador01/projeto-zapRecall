import Pergunta from "./Pergunta"
import setaPlay from "../img/seta_play.png"
import iconeCerto from "../img/icone_certo.png"
import iconeQuase from "../img/icone_quase.png"
import iconeErro from "../img/icone_erro.png"
import { useState } from "react"
import styled from "styled-components"

export default function Perguntas(props){
    const [exibirCard, setExibirCard] = useState([])
    const [estiloTexto, setEstiloTexto] = useState('')
    const [ultimaChave, setUltimaChave] = useState('')
    

    function riscarTexto(cor, key){

    let novoCard = [...props.cardsClicados, {key: key, cor: cor}]
    
    
    novoCard = novoCard.filter(function (i) {
        return i;
      });
    
    props.setCardsClicados(novoCard)
    // console.log(novoCard.filter(card=>card.key === "O que é JSX?"));
    setExibirCard(exibirCard.filter(item => item !== key))
    
    }
    function virarCard(posicao){
        
        if (props.cardsClicados.filter(card=>card.key === posicao).length!==0){
            return false
        }
        setExibirCard([...exibirCard, posicao])
    }
    function filtraCard(questao){
        let filtrada = props.cardsClicados.filter(card=>card.key === questao)
        return filtrada[0] ? {color: filtrada[0].cor, textDecoration: 'line-through'} : {};
        
    }
    function filtraCard2(questao){
        let filtrada = props.cardsClicados.filter(card=>card.key === questao)
    
        if (filtrada[0]!== undefined && filtrada[0].cor == "#2FBE34") {
            return iconeCerto
        }else if(filtrada[0]!== undefined && filtrada[0].cor == "#FF922E"){
            return iconeQuase
        }else if(filtrada[0]!== undefined && filtrada[0].cor == "#FF3030"){
            return iconeErro
        }else{
            return setaPlay
        }

    }
    function filtraCard3(questao){
        let filtrada = props.cardsClicados.filter(card=>card.key === questao)
    
        if (filtrada[0]!== undefined && filtrada[0].cor == "#2FBE34") {
            return "zap-icon"
        }else if(filtrada[0]!== undefined && filtrada[0].cor == "#FF922E"){
            return "partial-icon"
        }else if(filtrada[0]!== undefined && filtrada[0].cor == "#FF3030"){
            return "no-icon" 
        }else{
            return ""
        }
    }
    
    return(
        <ul className="Perguntas">
                {props.cards.map( (c,index) => (
                    exibirCard.includes(c.question) ? 
                        <Pergunta   data-test="flashcard-text"
                                    datakey={c.question}
                                    key={c.question} 
                                    questao={c.question} 
                                    resposta={c.answer}
                                    riscarTexto={riscarTexto}
                                    /> 
                        :
                        <PerguntaFechada 
                            data-test="flashcard"
                            key={c.question} 
                            style={   filtraCard(c.question)  }
                            datakey={c.question}
                            ><span data-test="flashcard-text">Pergunta {index+1}</span> <img onClick={() => virarCard(c.question)} src={filtraCard2(c.question)} data-test={filtraCard3(c.question)} />
                            </PerguntaFechada>)
                )
                }
            
            
            
            
            
        </ul>
        
    )

}
const PerguntaFechada = styled.div `
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    > p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor:pointer;
    }
    `
