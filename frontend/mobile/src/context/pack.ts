import React from 'react';

export type CardProps = {
  id: string;
  type: string;
  imageUrl: string;
  visible: boolean;
}

export type PackCardsProps = {
  monsterCards: CardProps[],
  spellAndTrapCards: CardProps[],
}

type PackProps = {
  pack: PackCardsProps | null;
  isLoading: boolean;
  showCard?: (card: CardProps) => void;
}

const pack: PackProps = {
  pack: null,
  isLoading: true,
};

export const PackContext = React.createContext(pack);