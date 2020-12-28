import React from 'react';
import {BoldTitle} from './style';

interface TitleProps{
    content:string;
}

const Title:React.FC<TitleProps> = ({content}) =>{

return (
    <BoldTitle>
        {content}
    </BoldTitle>
)


} 

export default Title;