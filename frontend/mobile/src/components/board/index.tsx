import React from 'react';

import BackgroundImage from '../../assets/bg.png';
import { usePackContext } from '../../provider/pack';
import Card from '../cards';

import { Background, Container, Content, Loader } from './styles';

const Board = () => {
  const {pack, isLoading} = usePackContext();

  if(isLoading){
    return (
      <Container>
        <Background source={BackgroundImage}>
          <Loader testID='loader' />
        </Background>
      </Container>
    )
  }

  return <Container>
    <Background source={BackgroundImage}>
      <Content testID='monster-pack'>
        {pack!.monsterCards.map((item, index) => <Card item={item} index={index} key={item.id} />)}
      </Content>
      <Content testID='spell-trap-pack'>
        {pack!.spellAndTrapCards.map((item, index) => <Card item={item} index={index+2} key={item.id} />)}
      </Content>
    </Background>
  </Container>
}

export default Board;