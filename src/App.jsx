import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from './navbar/Navbar'
import { ApplianceConsumptionDashboard } from './dashboard/ApplianceConsumptionDashboard';
import { sensorsList } from './dataRepository';
import { useState } from 'react';

function App() {
  const [sensor, setSensor] = useState(sensorsList[0])

  function changeSensor(sensor) {
    setSensor(sensor);
  }

  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(6, 1fr)"
        height="100vh"
        color="gray.50"
        bgColor="gray.800"
      >
        <GridItem
          className="navbar"
          colSpan={1}
        >
          <Navbar
            sensor={sensor}
            sensorsList={sensorsList}
            changeSensor={changeSensor}
          />
        </GridItem>
        
        <GridItem
          className="content"
          colSpan={5}
        >
            <ApplianceConsumptionDashboard
              consumption={sensor.consumption}
              tariff={sensor.tariff}
              appliances={sensor.appliances}
            />
        </GridItem>

      </Grid>
    </ChakraProvider>
  );
}

export default App;
