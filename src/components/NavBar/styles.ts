import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:38px;
background-color:#162447;
position:fixed;
z-index: 9999;
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.10);
ul{
    display:flex;
    justify-content:flex-end;
    padding:5px 5%;
}
ul li{
    color:#fff;
    margin-left:5px;
    background-color:#1f4068;
    padding:5px;
    cursor: pointer;
}
    
`;