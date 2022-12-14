import { Grid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const disclosure = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImage, setSelectedImage] = useState("");

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string){
    setSelectedImage(url);
    disclosure.onOpen()
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <Grid templateColumns="repeat(3, 18rem)" gap="40px" w="max">
        {
          cards.map(card => (
              <Card key={card.id} data={card} viewImage={handleViewImage}/>
          ))
        }
      </Grid >

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage imgUrl={selectedImage} isOpen={disclosure.isOpen} onClose={disclosure.onClose}/>
    </>
  );
}
