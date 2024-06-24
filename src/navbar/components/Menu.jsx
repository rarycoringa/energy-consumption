import { Button, Flex } from "@chakra-ui/react";

export function Menu () {
    return (
        <Flex
            flexDirection="column"
            alignItems="stretch"
            gap={1}
        >
            <Button variant="ghost" justifyContent="flex-start">
                Appliance Consumption
            </Button>
            
            <Button variant="ghost" justifyContent="flex-start" isDisabled={true}>
                Weekly Consumption
            </Button>
        </Flex>
    );
}