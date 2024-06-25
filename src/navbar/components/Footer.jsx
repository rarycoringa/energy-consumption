import { Flex, Text } from "@chakra-ui/react";

export function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            gap={1}
            color="gray.300"
        >
            <Text fontSize="sm">Energy Consumption &copy; {currentYear}</Text>
            <Text fontSize="sm">Built by Matheus and Rary</Text>
        </Flex>
    );
}