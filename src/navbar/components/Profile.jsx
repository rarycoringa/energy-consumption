import { Avatar, Flex, Spacer, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { GrMoney } from "react-icons/gr";
import { HiStatusOffline, HiStatusOnline } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

function OnlineStatus () {
    return (
        <Tag variant="outline" colorScheme="green" minWidth="9.5em">
            <TagLeftIcon as={HiStatusOnline} />
            <TagLabel as="b">Sensor Online</TagLabel>
        </Tag>
    );
}

function OfflineStatus () {
    return (
        <Tag variant="outline" colorScheme="red" minWidth="9.5em">
            <TagLeftIcon as={HiStatusOffline} />
            <TagLabel as="b">Sensor Offline</TagLabel>
        </Tag>
    );
}

function City ({ city }) {
    return (
        <Tag variant="outline" colorScheme="gray" minWidth="9.5em">
            <TagLeftIcon as={MdOutlineLocationOn} />
            <TagLabel as="b">{city}</TagLabel>
        </Tag>
    );
}

function Tariff ({ tariff }) {
    return (
        <Tag variant="outline" colorScheme="gray" minWidth="9.5em">
            <TagLeftIcon as={GrMoney} />
            <TagLabel as="b">Tariff $ {tariff.toFixed(2)}</TagLabel>
        </Tag>
    );
}

export function Profile ( { sensor } ) {

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            gap={1}
            padding={3}
        >
            <Avatar size="lg" name={sensor.user.name} src='https://someavatar.com/{sensor.id}.jpg' />

            <Text fontSize="xl" as="b">{ sensor.user.name }</Text>

            <Spacer />

            {(sensor.isOnline ? <OnlineStatus /> : <OfflineStatus />)}

            <Spacer />

            <City city={sensor.city} />

            <Spacer />

            <Tariff tariff={sensor.tariff} />

        </Flex>
    );
}