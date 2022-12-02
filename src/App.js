import styled from "styled-components";
import GlobalStyle from "./css/globalStyle";
import Perguntas from "./components/Perguntas";
import logo from "./img/logo.png"
export default function App() {
 
  return (
    <div className="App">
     <div className="screen-container">
      <div className="logo-container">
        <img src={logo} />
        <h1>ZapRecall</h1>
      </div>
        <Perguntas />
      </div>
      <div className="footer-concluidos">
        0/4 Concluídos
      </div>
      <GlobalStyle />
    </div>
  );
}


