import React from "react";
import styles from "../styles";

const DollItem = (props) => {
    const {item}=props;
    return (
        <div style={styles.item} key={item.id}>
        <img style={styles.Image} src={item.image} alt={item.name} />
        <p style={styles.text}>{item.name}</p>
        <p style={styles.text}>{item.price}$</p>
      </div>
    );
  
  };
export default DollItem;