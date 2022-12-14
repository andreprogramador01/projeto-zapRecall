import styled from "styled-components";
import GlobalStyle from "./css/globalStyle";
import Perguntas from "./components/Perguntas";
import logo from "./img/logo.png"
import { useState } from "react";
export default function App() {
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
const [cardsClicados, setCardsClicados] = useState([{}])
  return (
    <div className="App">
     <ContainerScreen>
      <LogoContainer>
        <img src={logo} />
        <h1>ZapRecall</h1>
      </LogoContainer>
        <Perguntas  setCardsClicados={setCardsClicados} 
                    cardsClicados={cardsClicados}
                    cards={cards} />
    </ContainerScreen>
      <FooterConcluidos data-test="footer">
      {cardsClicados.length - 1}/{cards.length} Concluídos
      </FooterConcluidos>
      <GlobalStyle />
    </div>
  );
}
const ContainerScreen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
   
  
  
  img {
    width: 52px;
  }
  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
 `

 const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

    .container-botoes {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
 `

