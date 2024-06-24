import { Grid, GridItem } from "@chakra-ui/react";
import { MonthlySummaryCard } from "./components/MonthlySummaryCard";
import { ApplianceList } from "./components/ApplianceList"

export function ApplianceConsumptionDashboard () {
    return (
        <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(2, 1fr)"
            height="100vh"
            width="100%"
            gap={5}
            paddingX="8em"
            paddingY="3em"

        >
            <GridItem
                rowSpan={1}
                colSpan={1}
            >
                <MonthlySummaryCard 
                    summaryType="Cost"
                    currentMonthValue="$ 29.30"
                    previousMonthValue="$ 31.85"
                />
            </GridItem>

            <GridItem
                rowSpan={1}
                colSpan={1}
            >
                <MonthlySummaryCard 
                    summaryType="Consumption"
                    currentMonthValue="89 kW"
                    previousMonthValue="93 kW"
                />
            </GridItem>

            <GridItem
                rowSpan={3}
                colSpan={2}
            >
                <ApplianceList />
            </GridItem>

        </Grid>
    );
}