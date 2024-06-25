import { Flex } from "@chakra-ui/react";
import { MonthlySummaryCard } from "./MonthlySummaryCard";

export function MonthlySummaryList (
    { consumption, tariff }
) {

    function calculateCost(consumption, tariff) {
        return (
            consumption * tariff
        )
    }

    function calculateSaving(currentValue, previousValue) {
        return (
            (previousValue - currentValue) / currentValue * 100
        )
    }

    return (
        <Flex gap={4} flexDirection="row" padding={2}>
            <MonthlySummaryCard
                summaryType="Cost"
                currentMonthValue={"$ " + calculateCost(consumption.current, tariff)}
                previousMonthValue={"$ " + calculateCost(consumption.previous, tariff)}
                saving={calculateSaving(
                    calculateCost(consumption.current, tariff), calculateCost(consumption.previous, tariff)
                )}
            />

            <MonthlySummaryCard 
                summaryType="Consumption"
                currentMonthValue={consumption.current + " kW"}
                previousMonthValue={consumption.previous + " kW"}
                saving={calculateSaving(
                    consumption.current, consumption.previous
                )}
            />
        </Flex>
    );
}