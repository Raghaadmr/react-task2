import styled from "styled-components";



export const Title = styled.h1`
text-align: center;
`;

export const Description = styled.h4`
text-align: center;
`;

export const ShopImage = styled.img`
display:block;
margin-left:auto;
margin-right:auto;
width:50%;
`;

export const ListWrapper = styled.div`
text-align: center;
justify-content:center;
display:flex;
`;

export const ItemWrapper = styled.div`
img{
    width:200px;
    height:200px;
}
p.price {
    color: ${(props)=> props.theme.secondaryColor};
    }

`;