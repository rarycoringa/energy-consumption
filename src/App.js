import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Buttons } from './components/Button';
import { Footer } from './components/Footer';
import { ModalRegistration } from './components/ModalRegistration';

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(7, 1fr)"
        w="100%"
        h="100vh"
        gap={5}
        bg='#1C1B1E'
      >
        <GridItem className="navbar" 
        w="108%" 
        colSpan={1} 
        backgroundColor='#101011' 
        display="flex" 
        alignItems="center" 
        justifyContent="space-between" 
        flexDirection="column"
        >
          <Header />
          <Buttons />
          <Footer />
        </GridItem>
        
        <GridItem colSpan={2} colStart={6} colEnd={7}>
          <ModalRegistration />
        </GridItem>

      </Grid>

    </ChakraProvider>
  );
}

export default App;
