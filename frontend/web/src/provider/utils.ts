import { CardProps, PackCardsProps } from "../context/pack";

export const getUpdatedPack = (pack: PackCardsProps, card: CardProps) => {
  let updatedPack = pack;

  if(card.type === "Normal Monster"){
    const index = updatedPack.monsterCards.findIndex(item => item.id === card.id);
    updatedPack.monsterCards[index] = card;
  }else{
    const index = updatedPack.spellAndTrapCards.findIndex(item => item.id === card.id);
    updatedPack.spellAndTrapCards[index] = card;
  }

  return updatedPack;
}

export const getFormattedPack = (monsterCards: CardProps[], spellTrapCards: CardProps[]) => {
  const shuffleMonsterCards = monsterCards.sort(() => Math. random() - 0.5);
  const shuffleSpellTrapCards = spellTrapCards.sort(() => Math. random() - 0.5);
  const formattedPack: PackCardsProps = {
    monsterCards: [
      shuffleMonsterCards[0],
      shuffleMonsterCards[1],
      shuffleMonsterCards[2],
      shuffleMonsterCards[3]
    ],
    spellAndTrapCards: [
      shuffleSpellTrapCards[0],
      shuffleSpellTrapCards[1],
      shuffleSpellTrapCards[2],
      shuffleSpellTrapCards[3]
    ]
  }
  return formattedPack;
}