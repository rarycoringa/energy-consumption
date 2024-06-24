import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from './navbar/Navbar'
import { ApplianceConsumptionDashboard } from './dashboard/ApplianceConsumptionDashboard';

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(7, 1fr)"
        height="100vh"
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
            <ApplianceConsumptionDashboard />
        </GridItem>

      </Grid>
    </ChakraProvider>
  );
}

export default App;
