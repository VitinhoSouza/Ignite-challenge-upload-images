import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
 return (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay/>
    <ModalContent maxW="900px" w="auto">
      <ModalBody padding="0">
        <Image 
          src={imgUrl}
          maxW="900px"
          maxH="600px"
          borderTopRadius="md"
        />
        
      </ModalBody>
      <ModalFooter heigth="40px" w="100%" display={"flex"} justifyContent="start" bgColor="pGray.800">
        <Link href={imgUrl} target="_blank">Abrir original</Link>
      </ModalFooter>
    </ModalContent>
  </Modal>
 )
}
