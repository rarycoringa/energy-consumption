import { Button, Flex, LinkBox } from "@chakra-ui/react";

export function Menu () {
    return (
        <Flex
            flexDirection="column"
            alignItems="stretch"
            gap={1}
        >
            <Button as="a" href="#" variant="ghost" justifyContent="flex-start">
                Appliance Consumption
            </Button>
            
            <Button variant="ghost" justifyContent="flex-start" isDisabled={true}>
                Weekly Consumption
            </Button>
        </Flex>
    );
}