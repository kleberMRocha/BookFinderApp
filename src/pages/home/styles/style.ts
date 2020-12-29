import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 1200px;
  height: 100vh;
  
  @media (max-width: 800px) {
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;

export const BookContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
  height: 25vh;
  @media (max-width: 800px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  text-align: center;
  color: #fff;
  margin-bottom:20px;
  width:80vw;
`;

export const Error = styled.div`
  p{
    color:tomato;
    background-color:whitesmoke;
    padding:5px;
    margin:5px;
  }
`;

