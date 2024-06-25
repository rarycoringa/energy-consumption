import { Card, CardBody, CardFooter, CardHeader, Progress, Stat, StatHelpText, StatNumber, Text } from "@chakra-ui/react";
import { TbGridDots } from "react-icons/tb";

export function ApplianceCard (
    { name, icon }
) {

    const price = Math.floor(Math.random() * 30)
    const percentage = Math.floor(Math.random() * 60)

    return (
        <Card
            flexDirection="row" alignItems="center" paddingY={0} paddingX={4}
            color="gray.50" bgColor="gray.700"
        >
            <CardHeader padding={3} color="teal.400">{icon ? icon : <TbGridDots size={40} />}</CardHeader>
            <CardBody>
                <Text as="b" fontSize="xl">
                    {name}
                </Text>
                
                <Progress value={percentage} marginTop={2} size="sm" colorScheme="teal" bgColor="gray.600"></Progress>
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