import styled, {css} from 'styled-components';

interface ContainerProps{
    isFocused:boolean;
    isEmpty:boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color:#fff;
    height:50px;
    width:100%;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px solid #fff;

    ${(props)=> props.isFocused && css`
            border: 2px solid #060936;
    `}

    ${(props)=> props.isEmpty && css`
            border: 2px solid tomato;
    `}

    @media(max-width: 800px) {
        width:100%;
        text-align:center;
        input{
            width:150px;
        }
        button{
           position:absolute;
           width:95vw;
           margin:auto;
           bottom:0;
           left:0;
           right:0;
           margin: 5px;
        }
        
    }
   
    input{
        width:300px;
        height:30px;
        border:none;
        outline:none;
        margin: 5px;
        &::placeholder{
            text-align:center;
        }

        ${(props)=> props.isEmpty && css`
            &::placeholder{
                color: tomato;
            }
        `}

    }
     button{
        box-sizing: border-box;
        outline: none;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
        padding: 0 30px;
        font-size: 16px;
        background: #de6666;
        color: #fff;
        font-weight: bold;
        border: 0;
        height: 34px;
        line-height: 34px;
        transition:background .5s;
        &:hover{
            background: #b84848;
        }
    
    }

`;