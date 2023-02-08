
import { useAnimationState } from 'moti/build';
import React, { useEffect, useState } from 'react';
import MonsterZone from '../../assets/monster_zone.png';
import SpellTrapZone from '../../assets/spell_trap_zone.png';
import { CardProps } from '../../context/pack';
import { usePackContext } from '../../provider/pack';

import { Container, Image } from './styles';

type Props = {
  item: CardProps;
}

const Card = ({ item }: Props) => {
  const {showCard} = usePackContext();
  const [isVisible, setIsVisible] = useState(false);

  const sourceZone = item.type === "Normal Monster" ? MonsterZone : SpellTrapZone;
  const sourceCard = {uri: item.imageUrl};
  const source = isVisible ? sourceCard : sourceZone;

  const iconAnimationState = useAnimationState({
    start: {
      rotateY: 6
    },
    end: {
      rotateY: 3
    }
  });

  const updateCard = () => {
    if(isVisible){
      return
    }

    iconAnimationState.transitionTo('start');
    setIsVisible(!isVisible)
    showCard && showCard({...item, visible: true})
  };

  useEffect(() => {
    iconAnimationState.transitionTo('end');
  }, []);

  return (
    <Container onPress={updateCard}>
      <Image source={source} resizeMode="center" state={iconAnimationState}/>
    </Container>
  )
}

export default Card;