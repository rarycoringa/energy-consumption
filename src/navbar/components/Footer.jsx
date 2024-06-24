import { Flex, Text } from "@chakra-ui/react";

export function Footer () {
    const current_year = new Date().getFullYear();

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            gap={1}
        >
            <Text fontSize="sm">Energy Consumption &copy; {current_year}</Text>
            <Text fontSize="sm">Built by Matheus and Rary</Text>
        </Flex>
    );
}