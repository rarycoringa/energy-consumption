import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Buttons } from './components/Button';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(7, 1fr)"
        h="100vh"
        gap={5}
      >
        <GridItem className="navbar" colSpan={1} bg='white'>
          <Header />
          <Buttons />
          <Footer />
        </GridItem>
        <GridItem className="content" colSpan={6} bg='grey'>
          
        </GridItem>
      </Grid>

    </ChakraProvider>
  );
}

export default App;
