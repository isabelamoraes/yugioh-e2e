import React from 'react';
import { usePackContext } from '../../provider/pack';
import Card from '../card';

import { Container, Loader, Pack } from './styles';

const Board = () => {
  const {pack, isLoading} = usePackContext();

  if(isLoading){
    return <Loader className='loader' />
  }

  return <Container className='pack'>
    <Pack className='monster-pack'>
      {pack.monsterCards.map((item) => <Card item={item} key={item.id} />)}
    </Pack>
    <Pack className='spell-trap-pack'>
      {pack.spellAndTrapCards.map((item) => <Card item={item} key={item.id} />)}
    </Pack>
  </Container>
}

export default Board;