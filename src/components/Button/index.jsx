import { Button } from '@chakra-ui/react'
import { Container } from './styles'

export function Buttons() {
  return(
    <Container>
      <Button size='lg'>Consumo por aparelho</Button>
      <Button size='lg'>Consumo diário</Button>
    </Container>
  )
}