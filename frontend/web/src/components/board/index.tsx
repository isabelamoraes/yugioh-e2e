import React from 'react';
import { usePackContext } from '../../provider/pack';
import Card from '../card';

import { Container, Loader, Pack } from './styles';

const Board = () => {
  const {pack, isLoading} = usePackContext();

  if(isLoading){
    return <Loader />
  }

  return <Container>
    <Pack>
      {pack.monsterCards.map((item) => <Card item={item} key={item.id} />)}
    </Pack>
    <Pack>
      {pack.spellAndTrapCards.map((item) => <Card item={item} key={item.id} />)}
    </Pack>
  </Container>
}

export default Board;