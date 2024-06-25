import { Card, CardBody, CardFooter, CardHeader, Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react";

export function MonthlySummaryCard (
    { summaryType, currentMonthValue, previousMonthValue, saving }
) {

    return (
        <Card
            alignItems="center" gap={2} paddingY={2} paddingX={6} width="100%" height="100%"
            color="gray.50" bgColor="gray.700"
        >
            <CardHeader padding={0}>
                <Text fontSize="sm" as="b">Monthly {summaryType} Summary</Text>
            </CardHeader>

            <CardBody padding={0} width="100%">
                <Stat>
                    <Flex justifyContent="space-between" alignItems="center">
                        <StatLabel>Current Month:</StatLabel>
                        <StatNumber fontSize="3xl">{currentMonthValue}</StatNumber>
                    </Flex>
                </Stat>

                <Stat color="gray.300">
                    <Flex justifyContent="space-between" alignItems="center">
                        <StatLabel>Previous Month:</StatLabel>
                        <StatNumber fontSize="xl">{previousMonthValue}</StatNumber>
                    </Flex>
                </Stat>
            </CardBody>

            <CardFooter padding={0}>
                <Stat>
                    <StatHelpText>
                        <StatArrow type={saving >= 0.0 ? "increase" : "decrease"} />
                        {saving.toFixed(0)}% of savings
                    </StatHelpText>
                </Stat>
            </CardFooter>
        </Card>
    );
}