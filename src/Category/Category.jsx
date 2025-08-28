import { Tally4, Coffee, UtensilsCrossed, Soup, Pizza, Hamburger, Croissant } from 'lucide-react';


export const categories = [
    {
        id: 1,
        name: "All",
        image: <Tally4 size={55} color='#ADC4CE' />
    },
    {
        id: 2,
        name: "BreakFast",
        image: <Coffee size={55} color='#ADC4CE' />
    },
    {
        id: 3,
        name: "Soups",
        image: <Soup size={55} color='#ADC4CE' />
    }, {
        id: 4,
        name: "Pasta",
        image: <Croissant size={55} color='#ADC4CE' />
    }
    , {
        id: 5,
        name: "Main Course",
        image: <UtensilsCrossed size={55} color='#ADC4CE' />
    }
    , {
        id: 6,
        name: "Pizza",
        image: <Pizza size={55} color='#ADC4CE' />
    },
    {
        id: 7,
        name: "Burger",
        image: <Hamburger size={55} color='#ADC4CE' />
    }
]