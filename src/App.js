import React from "react";
import "./App.css";
import items from "./items";
import styles from "./styles";

function App() {
  const itemList = items.map((item) => (
    <div style={styles.item} key={item.id}>
      <img style={styles.Image} src={item.image} alt={item.name} />
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price}$</p>
    </div>
  ));
  return (
    <div style={styles.body} >
      <p></p>
      <h1 style={styles.text}>
        COOKIE DOLLS KILL
      </h1>
      <div style={styles.list}>{itemList}</div>
    </div>
  );
}

export default App;
