import { Container } from "./styles";
import { Avatar } from '@chakra-ui/react'

export function Header() {
  return(
    <Container>
      <Avatar name='Cristina Fernandes' src='https://randomuser.me/api/portraits/women/14.jpg' size='lg'/>
      <p>Cristina Fernandes</p>
    </Container>
  )
}