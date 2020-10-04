import React from "react";
import {ItemWrapper} from "./styles";
const DollItem = (props) => {
    const {item}=props;
    return (
        <ItemWrapper key={item.id}>
        <img  src={item.image} alt={item.name} />
        <p >{item.name}</p>
        <p class="price">{item.price}$</p>
        </ItemWrapper>
    );
  
  };
export default DollItem;