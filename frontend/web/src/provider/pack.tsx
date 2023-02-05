import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { CardProps, PackCardsProps, PackContext } from '../context/pack';
import api from '../services/api';
import { getFormattedPack, getUpdatedPack } from './utils';

type PackProviderProps = {
  children: ReactNode;
};

const PackProvider = ({children}: PackProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCardsTotal, setVisibleCardsTotal] = useState(0)
  const [pack, setPack] = useState<PackCardsProps | null>(null);
  const monsterCards = [];
  const spellTrapCards = [];

  const showCard = (card: CardProps) => {
    const updatedPack = getUpdatedPack(pack, card);
    
    setPack(updatedPack);
    setVisibleCardsTotal(visibleCardsTotal + 1);
  }
  
  const packMount = () => {
    const formattedPack = getFormattedPack(monsterCards, spellTrapCards);
    
    setPack(formattedPack);
    setIsLoading(false);
  }

  const fetchData = async () => {
    setIsLoading(true)
    const response = await api.get('/')

    response.data.data.map(item => {
      if(item.type === "Normal Monster" || item.type === "Spell Card" || item.type === "Trap Card"){
        const sanitizedPack = {
          id: item.id,
          type: item.type,
          imageUrl: item.card_images[0].image_url,
          visible: false
        }
  
        item.type === 'Normal Monster' ? monsterCards.push(sanitizedPack) : spellTrapCards.push(sanitizedPack)
      }
    })

    packMount();
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() =>{
    if(visibleCardsTotal === 8){
      setTimeout(() => {
        setIsLoading(true);
        setPack(null);
        setVisibleCardsTotal(0);
        fetchData();
      }, 5000);
    }
  }, [visibleCardsTotal]);

  return (
    <PackContext.Provider value={{
      pack,
      isLoading,
      showCard
    }}>
      {children}
    </PackContext.Provider>
  );
}

export default PackProvider;

export const usePackContext = () => {
  const context = useContext(PackContext);

  return context;
};

