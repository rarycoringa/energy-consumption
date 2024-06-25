import { Avatar, AvatarBadge, Flex, Text } from "@chakra-ui/react";

export function ProfileList (
    { sensorsList, changeSensor }
) {
    return (
        <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap={3}
            padding={3}
        >
            <Text fontSize="sm" as="b" color="gray.400">Change Profile:</Text>
            
            {
                sensorsList.map(
                    sensor => (
                        <Flex as="button" onClick={() => changeSensor(sensor)} width="100%" gap={2}>
                            <Avatar size="sm" color="gray.300" name="Some Name" src='https://someavatar.com/aa.jpg'>
                                <AvatarBadge boxSize={3.5} bg={sensor.isOnline ? "green" : "red"} borderColor="gray.800" />
                            </Avatar>
                            <Flex flexDirection="column" width="100%" alignItems="flex-start">
                                <Text fontSize="xs" as="b" color="gray.300">{sensor.user.name}</Text>
                                <Text fontSize="2xs" color="gray.400">{sensor.city}</Text>
                            </Flex>
                        </Flex>
                    )
                )
            }
            
        </Flex>
    )
}