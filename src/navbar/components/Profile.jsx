import { Avatar, Flex, Text } from "@chakra-ui/react";

export function Profile () {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            gap={1}
            padding={5}
        >
            <Avatar size="lg" />

            <Text fontSize="xl" as="b">James Smith</Text>
        </Flex>
    );
}