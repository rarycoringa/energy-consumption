import { Flex } from "@chakra-ui/react";

import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";
import { ProfileList } from "./components/ProfileList";

export function Navbar ( { sensor, sensorsList, changeSensor } ) {
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="stretch"
            height="100vh"
            width="100%"
            padding={3}
        >
            <Profile sensor={sensor} />

            <ProfileList sensorsList={sensorsList} changeSensor={changeSensor}/>

            <Footer />
        </Flex>
    );
}