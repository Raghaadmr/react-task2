import React from "react";
import "./App.css";

//Styles
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles";

//Components
import DollList from "./components/CookiedollList.js";
import Header from "./components/Header";

const theme ={
  mainColor:"black",
  backgroundColor:"grey",
  secondaryColor:"white",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
<GlobalStyle/>  
  <Header/>
      <DollList/>
    </ThemeProvider>
  );
}

export default App;
