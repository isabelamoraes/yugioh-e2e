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
          <Loader />
        </Background>
      </Container>
    )
  }

  return <Container>
    <Background source={BackgroundImage}>
      <Content>
        {pack!.monsterCards.map((item) => <Card item={item} key={item.id} />)}
      </Content>
      <Content>
        {pack!.spellAndTrapCards.map((item) => <Card item={item} key={item.id} />)}
      </Content>
    </Background>
  </Container>
}

export default Board;