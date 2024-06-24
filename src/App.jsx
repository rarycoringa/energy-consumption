import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from './navbar/Navbar'
import { AppliancesDashboard } from './dashboard/AppliancesDashboard';

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(7, 1fr)"
        h="100vh"
        gap={5}
      >
        <GridItem
          className="navbar"
          colSpan={1}
        >
          <Navbar />
        </GridItem>
        
        <GridItem
          className="content"
          colSpan={6}
          >
            <AppliancesDashboard />
        </GridItem>

      </Grid>
    </ChakraProvider>
  );
}

export default App;
