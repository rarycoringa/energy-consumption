import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Buttons } from './components/Button';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(7, 1fr)"
        w="100%"
        h="100vh"
        gap={5}
      >
        <GridItem className="navbar" 
        w="108%" 
        colSpan={1} 
        bg='#101011' 
        display="flex" 
        alignItems="center" 
        justifyContent="space-between" 
        flexDirection="column"
        >
          <Header />
          <Buttons />
          <Footer />
        </GridItem>
        <GridItem className="content" w="100%" colSpan={6} bg='#1C1B1E'>
          
        </GridItem>
      </Grid>

    </ChakraProvider>
  );
}

export default App;
