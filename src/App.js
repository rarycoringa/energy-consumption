import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(7, 1fr)"
        h="100vh"
        gap={5}
      >
        <GridItem className="navbar" colSpan={1} bg='white'>
          
        </GridItem>
        <GridItem className="content" colSpan={6} bg='grey'>
          
        </GridItem>
      </Grid>

    </ChakraProvider>
  );
}

export default App;
