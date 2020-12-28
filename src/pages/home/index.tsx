import React from 'react';
import Title from '../../components/Title';
import Figure from '../../components/Figure'
import {Container, FormGroup} from './styles/style';
import Input from '../../components/Input';

import ImgFigure from '../../assets/home.svg'

const App:React.FC = () => {
  return (
    <Container>
      <FormGroup>
        <Title content="Book finder"/>
        <Input />
      </FormGroup>
      <Figure alt="Book finder" src={ImgFigure}/>
    </Container>
  );
}

export default App;
