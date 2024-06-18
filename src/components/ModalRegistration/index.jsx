import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';

import { Container } from './styles.js';

export function ModalRegistration() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return(
    <Container>
      <Button onClick={onOpen}>Registrar um eletrodoméstico</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro de eletrodoméstico</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>AAAAAAAAAAA</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}