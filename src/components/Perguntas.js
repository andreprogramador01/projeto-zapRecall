import Pergunta from "./Pergunta"
import setaPlay from "../img/seta_play.png"
import { useState } from "react"

export default function Perguntas(props){
    const [exibirCard, setExibirCard] = useState([])
    const [estiloTexto, setEstiloTexto] = useState('')
    const [ultimaChave, setUltimaChave] = useState('')
    const [cardsClicados, setCardsClicados] = useState([{}])
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]
    function riscarTexto(cor, key){
    let novoCard = [...cardsClicados, {key: key, cor: cor}]
    
    setCardsClicados(novoCard)
    // console.log(novoCard.filter(card=>card.key === "O que é JSX?"));
    setExibirCard(exibirCard.filter(item => item !== key))
    
    }
    function virarCard(posicao){
        setExibirCard([...exibirCard, posicao])
    }
    function filtraCard(questao){
        let filtrada = cardsClicados.filter(card=>card.key === questao)
        return filtrada[0] ? filtrada[0].cor : '';
        
    }
    
    return(
        <ul className="Perguntas">
                {cards.map( (c,index) => (
                    exibirCard.includes(c.question) ? 
                        <Pergunta   datakey={c.question}
                                    key={c.question} 
                                    questao={c.question} 
                                    resposta={c.answer}
                                    riscarTexto={riscarTexto}
                                    /> 
                        :
                        <li 
                            key={c.question} 
                            style={ {color:  filtraCard(c.question) } }
                            datakey={c.question}
                            className="pergunta-fechada">Pergunta {index+1} <img onClick={() => virarCard(c.question)} src={setaPlay} /></li>)
                )
                }
            
            
            
            
            
        </ul>
        
    )

}