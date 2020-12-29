import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  position:relative;
  max-height: 500px;
  border-radius: 10px;
  text-align: center;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  font-weight: border-left;
  
  .description{
      text-align:left;
      height:50px;
      margin-bottom:50px;
      overflow: scroll;
      overflow-x: hidden; 
  }

  span & span{
      margin: 5px;
  }
  strong {
    font-weight: bold;
    margin-bottom: 8px;
  }
  p {
    color: #282928;
  }
  img {
    max-width: 50%;
    margin: 15px auto;
    cursor: pointer;
    
  }

  a {
    box-sizing: border-box;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    text-decoration:none;
    outline: none;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    padding: 0 30px;
    font-size: 16px;
    background: #141236;
    color: #fff;
    font-weight: bold;
    border: 0;
    height: 34px;
    line-height: 34px;
    transition: background 0.5s;
    &:hover {
      background: #211e4f;
    }
  }

  & + & {
    margin: 5px;
  }
`;
