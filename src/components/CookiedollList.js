import React from "react";
import {ListWrapper} from "./styles";
import items from "../items";
import DollItem from "./CookiedollItem";
const DollList = () => {

    const itemList = items.map((item) => (
    <DollItem item ={item} key={item.name}/>
  ));   
  return (
    <ListWrapper>
      {itemList}
    </ListWrapper>
  )

};
export default DollList