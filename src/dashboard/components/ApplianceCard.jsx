import { Card, CardBody, CardFooter, CardHeader, Progress, Stat, StatHelpText, StatNumber, Text } from "@chakra-ui/react";

export function ApplianceCard (
    { icon, title }
) {

    const price = Math.floor(Math.random() * 30)
    const percentage = Math.floor(Math.random() * 60)

    return (
        <Card flexDirection="row" alignItems="center"paddingY={2} paddingX={4}>
            <CardHeader padding={3}>{icon}</CardHeader>
            <CardBody>
                <Text as="b" fontSize="xl">
                    {title}
                </Text>
                
                <Progress value={percentage} marginTop={2} size="sm" colorScheme="gray" hasStripe isAnimated></Progress>
            </CardBody>
            <CardFooter>
                <Stat>
                    <StatNumber>$ {price}</StatNumber>
                    <StatHelpText>{percentage}%</StatHelpText>
                </Stat>
            </CardFooter>
        </Card>
    );
}