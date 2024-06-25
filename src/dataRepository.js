import { TbAirConditioning, TbFridge, TbGridDots, TbWash } from "react-icons/tb";
import { PiCookingPot, PiPower, PiThermometerHot, PiWashingMachine} from "react-icons/pi";
import { MdLightbulbOutline, MdOutlineElectricCar } from "react-icons/md";

export const sensorsList = [
    {
        id: 1,
        isOnline: true,
        city: "Houston, TX",
        tariff: 0.30,
        user: {
            name: "Liam Johnson",
        },
        consumption: {
            current: 265,
            previous: 91,
        },
        appliances: [
            "cooking",
            "electricVehicle",
            "heating",
            "standby",
            "others",
        ],
    },
    {
        id: 2,
        isOnline: false,
        city: "New York, NY",
        tariff: 0.30,
        user: {
            name: "Sophia Williams",
        },
        consumption: {
            current: 213,
            previous: 183,
        },
        appliances: [
            "airConditioning",
            "dishwasher",
            "fridgeFreezer",
            "washingMachine",
            "standby",
            "others",
        ],
    },
    {
        id: 3,
        isOnline: true,
        city: "Boston, MA",
        tariff: 0.25,
        user: {
            name: "Noah Smith",
        },
        consumption: {
            current: 112,
            previous: 141,
        },
        appliances: [
            "airConditioning",
            "cooking",
            "fridgeFreezer",
            "standby",
            "others",
        ],
    },
    {
        id: 4,
        isOnline: true,
        city: "Miami, FL",
        tariff: 0.25,
        user: {
            name: "William Jones",
        },
        consumption: {
            current: 112,
            previous: 89,
        },
        appliances: [
            "electricVehicle",
            "fridgeFreezer",
            "washingMachine",
            "standby",
            "others",
        ],
    },
    {
        id: 5,
        isOnline: true,
        city: "Boston, MA",
        tariff: 0.30,
        user: {
            name: "Isabella Davis",
        },
        consumption: {
            current: 157,
            previous: 160,
        },
        appliances: [
            "airConditioning",
            "cooking",
            "dishwasher",
            "fridgeFreezer",
            "washingMachine",
            "standby",
            "others",
        ],
    },
    {
        id: 6,
        isOnline: false,
        city: "Houston, TX",
        tariff: 0.25,
        user: {
            name: "Olivia Martinez",
        },
        consumption: {
            current: 229,
            previous: 101,
        },
        appliances: [
            "airConditioning",
            "cooking",
            "dishwasher",
            "electricVehicle",
            "fridgeFreezer",
            "heating",
            "washingMachine",
            "standby",
            "others",
        ],
    },
]

export const availableAppliancesList = [
    {
        key: "airConditioning",
        name: "Air Conditioning",
        icon: <TbAirConditioning size={40} />
    },
    {
        key: "cooking",
        name: "Cooking",
        icon: <PiCookingPot size={40} />
    },
    {
        key: "dishwasher",
        name: "Dishwasher",
        icon: <TbWash size={40} />
    },
    {
        key: "electricVehicle",
        name: "Electric Vehicle",
        icon: <MdOutlineElectricCar size={40} />
    },
    {
        key: "fridgeFreezer",
        name: "Fridge & Freezer",
        icon: <TbFridge size={40} />
    },
    {
        key: "heating",
        name: "Heating",
        icon: <PiThermometerHot size={40} />
    },
    {
        key: "lightingEntertainment",
        name: "Lighting & Entertainment",
        icon: <MdLightbulbOutline size={40} />
    },
    {
        key: "washingMachine",
        name: "Washing Machine",
        icon: <PiWashingMachine size={40} />
    },
    {
        key: "standby",
        name: "Standby",
        icon: <PiPower size={40} />
    },
    {
        key: "others",
        name: "Others",
        icon: <TbGridDots size={40} />
    },
]