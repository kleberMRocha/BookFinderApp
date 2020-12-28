import React from 'react';
import {Container} from './style';

interface FigureProps{
    alt:string;
    src:string;
}

const Figure:React.FC<FigureProps> = ({alt,src}) =>{

    return (
        <Container>
            <img src={src} alt={alt} />
        </Container>
    )

}

export default Figure;