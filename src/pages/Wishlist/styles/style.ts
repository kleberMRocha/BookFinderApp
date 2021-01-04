import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`;

export const WishListContainer = styled.div`
width:80%;
display:flex;
justify-content:center;
justify-items:center;
flex-wrap:wrap;
`;

export const TitleGroup =styled.div`
margin:50px 0;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

img{
    display:block;
    width:100px;
}

h1{
    font-weight:bold;
    font-size:30px;
}

img + h1{
    color:#fff;
    margin:50px;
}

`;
