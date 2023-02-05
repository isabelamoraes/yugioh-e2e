import React, { useCallback, useState } from 'react';
import { CardContent, Container, Content, ZoneContent } from './styles';

import MonsterZone from '../../assets/monster_zone.jpg';
import SpellTrapZone from '../../assets/spell_trap_zone.jpg';
import { CardProps } from '../../context/pack';
import { usePackContext } from '../../provider/pack';

type Props = {
  item: CardProps
}

const Card = ({ item }: Props) => {
  const {showCard} = usePackContext();
  const [isVisible, setIsVisible] = useState(false);

  const updateCard = () => {
    if(isVisible){
      return
    }
    setIsVisible(!isVisible)
    showCard({...item, visible: true})
  }

  return <Container className='card'>
    <Content onClick={updateCard} style={{transform: !isVisible ? 'rotateY(0deg)' : 'rotateY(180deg)'}}>
      {!isVisible ?
      <ZoneContent className='hide'>
        <img src={item.type === 'Normal Monster' ? MonsterZone : SpellTrapZone}/>
      </ZoneContent>
      :
      <CardContent className='visible'>
        <img src={item.imageUrl}/>
      </CardContent>}
    </Content>
  </Container>
}

export default Card;