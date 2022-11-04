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
    <ModalContent>
      <ModalBody>
        <Image src={imgUrl} maxH="600px" maxW="900px"/>
      </ModalBody>
      <ModalFooter>
        <Link href={imgUrl}>Abrir original</Link>
      </ModalFooter>
    </ModalContent>
  </Modal>
 )
}
