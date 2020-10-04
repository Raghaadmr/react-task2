import React from "react";
import "./App.css";
//Data
import items from "./items";
//Styles
import styles from "./styles";
//Components
import DollList from "./components/CookiedollList.js";
import Header from "./components/Header";

function App() {
  return (
    <div style={styles.body} >
      <Header/>
      <DollList/>
    </div>
  );
}

export default App;
