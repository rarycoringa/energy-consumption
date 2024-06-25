import { Flex } from "@chakra-ui/react";
import { ApplianceCard } from "./ApplianceCard";
import { availableAppliancesList } from "../../dataRepository";

export function ApplianceList ({ appliances }) {

    return (
        <Flex gap={4} height="100%" flexDirection="column" overflowY="scroll" padding={2}>
            {
                availableAppliancesList.map(
                    appliance => (appliances.includes(appliance.key) ? (
                        <ApplianceCard
                            name={appliance.name}
                            icon={appliance.icon}
                        />
                    ) : (<></>))
                )
            }
        </Flex>
    );
}