import { Flex } from "@chakra-ui/react";
import { ApplianceCard } from "./ApplianceCard";
import { TbAirConditioning, TbFridge, TbGridDots, TbWash } from "react-icons/tb";
import { PiCookingPot, PiPower, PiThermometerHot, PiWashingMachine} from "react-icons/pi";
import { MdLightbulbOutline, MdOutlineElectricCar } from "react-icons/md";

export function ApplianceList () {

    return (
        <Flex gap={4} height="100%" flexDirection="column" overflowY="scroll">
            <ApplianceCard
                icon={<TbAirConditioning size={40}/>}
                title="Air Conditioning"
            />

            <ApplianceCard
                icon={<PiCookingPot size={40}/>}
                title="Cooking"
            />

            <ApplianceCard
                icon={<TbWash size={40}/>}
                title="Dishwasher"
            />

            <ApplianceCard
                icon={<MdOutlineElectricCar size={40}/>}
                title="Electric Vehicle"
            />

            <ApplianceCard
                icon={<TbFridge size={40}/>}
                title="Fridge & Freezer"
            />

            <ApplianceCard
                icon={<PiThermometerHot size={40}/>}
                title="Heating"
            />

            <ApplianceCard
                icon={<MdLightbulbOutline size={40}/>}
                title="Lighting & Entertainment"
            />

            <ApplianceCard
                icon={<PiPower size={40}/>}
                title="Standby"
            />

            <ApplianceCard
                icon={<PiWashingMachine size={40}/>}
                title="Washing Machine"
            />

            <ApplianceCard
                icon={<TbGridDots size={40}/>}
                title="Others"
            />
        </Flex>
    );
}