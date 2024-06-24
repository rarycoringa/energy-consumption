import { Grid, GridItem } from "@chakra-ui/react";
import { MonthlySummaryCard } from "./components/MonthlySummaryCard";

export function AppliancesDashboard () {
    return (
        <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            height="100%"
            width="100%"
            gap={5}
            paddingX="8em"
            paddingY="3em"
            bgColor="lightgrey"
        >
            <GridItem
                rowSpan={1}
                colSpan={1}
            >
                <MonthlySummaryCard 
                    summaryType="Cost"
                    currentMonthValue="$ 29.30"
                    previousMonthValue="$ 31.85"
                    percentageValue={2}
                    percentageType="increase"
                />
            </GridItem>

            <GridItem
                rowSpan={1}
                colSpan={1}
            >
                <MonthlySummaryCard 
                    summaryType="Consumption"
                    currentMonthValue="89 kWh"
                    previousMonthValue="93 kWh"
                    percentageValue={3}
                    percentageType="increase"
                />
            </GridItem>

            <GridItem
                rowSpan={2}
                colSpan={2}
                bgColor="darkgray"
            >
            </GridItem>

        </Grid>
    );
}