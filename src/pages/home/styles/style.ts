import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    margin: 0 auto;
    justify-content:center;
    width:1200px;
    height:100vh;
    @media(max-width: 800px) {
      width:100vw;
      flex-wrap:wrap;
      overflow:hidden;
        
    }
`; 

export const FormGroup = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin: 0 auto;
`;

