import { Flex } from "@chakra-ui/react";

import { Profile } from "./components/Profile";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

export function Navbar () {
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            height="100vh"
            padding={5}
        >
            <Profile />

            <Menu />

            <Footer />
        </Flex>
    );
}