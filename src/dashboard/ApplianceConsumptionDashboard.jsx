import { Grid, GridItem } from "@chakra-ui/react";
import { ApplianceList } from "./components/ApplianceList"
import { MonthlySummaryList } from "./components/MonthlySummaryList";

export function ApplianceConsumptionDashboard (
    {
        consumption,
        tariff,
        appliances,
    }
) {
    return (
        <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(1, 1fr)"
            height="100vh"
            width="100%"
            gap={5}
            paddingX="8em"
            paddingY="3em"
            bgColor="gray.900"
        >
            <GridItem
                rowSpan={1}
                colSpan={1}
            >
                <MonthlySummaryList
                    consumption={consumption}
                    tariff={tariff}
                />
            </GridItem>

            <GridItem
                rowSpan={3}
                colSpan={1}
            >   
                <ApplianceList 
                    appliances={appliances}
                />
            </GridItem>

        </Grid>
    );
}