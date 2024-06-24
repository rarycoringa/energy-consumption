import { Card, CardBody, CardFooter, CardHeader, Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react";

export function MonthlySummaryCard (
    { summaryType, currentMonthValue, previousMonthValue}
) {

    const statArrowTypeList = ["increase", "decrease"]
    const statArrowTypeIndex = Math.floor(Math.random() * 2)
    const percentageValue = Math.floor(Math.random()* 5)

    return (
        <Card alignItems="center" gap={2} paddingY={2} paddingX={6} width="100%" height="100%">
            <CardHeader padding={0}>
                <Text fontSize="sm" as="b">Monthly {summaryType} Summary</Text>
            </CardHeader>

            <CardBody padding={0} width="100%">
                <Stat>
                    <Flex justifyContent="space-between" alignItems="center">
                        <StatLabel>Current Month:</StatLabel>
                        <StatNumber>{currentMonthValue}</StatNumber>
                    </Flex>
                </Stat>

                <Stat color="grey">
                    <Flex justifyContent="space-between" alignItems="center">
                        <StatLabel>Previous Month:</StatLabel>
                        <StatNumber fontSize="xl">{previousMonthValue}</StatNumber>
                    </Flex>
                </Stat>
            </CardBody>

            <CardFooter padding={0}>
                <Stat>
                    <StatHelpText>
                        <StatArrow type={statArrowTypeList[statArrowTypeIndex]} />
                        {percentageValue}% of savings
                    </StatHelpText>
                </Stat>   
            </CardFooter>
        </Card>
    );
}