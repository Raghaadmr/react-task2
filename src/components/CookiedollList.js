import React from "react";
import styles from "../styles";
import items from "../items";
import DollItem from "./CookiedollItem";
const DollList = () => {

    const itemList = items.map((item) => (
    <DollItem item ={item} key={item.name}/>
  ));   
  return (
      <div>
    <div style={styles.list}>{itemList}</div>

      </div>
  )

};
export default DollList