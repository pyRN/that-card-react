import { GET_EXPANSIONS_LIST } from '../actions/types'

const initialState = {
    
    expansions: [
    {
        object: "set",
        id: "372dafe8-b5d1-4b81-998f-3ae96b59498a",
        code: "2xm",
        mtgo_code: "2xm",
        arena_code: "2xm",
        tcgplayer_id: 2655,
        name: "Double Masters",
        uri: "https://api.scryfall.com/sets/372dafe8-b5d1-4b81-998f-3ae96b59498a",
        scryfall_uri: "https://scryfall.com/sets/2xm",
        search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3A2xm&unique=prints",
        released_at: "2020-08-07",
        set_type: "masters",
        card_count: 10,
        digital: false,
        nonfoil_only: false,
        foil_only: false,
        icon_svg_uri: "https://img.scryfall.com/sets/2xm.svg?1592798400"
    },
    {
        object: "set",
        id: "0f6ccf25-a627-4263-86df-5757137f1696",
        code: "jmp",
        tcgplayer_id: 2654,
        name: "Jumpstart",
        uri: "https://api.scryfall.com/sets/0f6ccf25-a627-4263-86df-5757137f1696",
        scryfall_uri: "https://scryfall.com/sets/jmp",
        search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Ajmp&unique=prints",
        released_at: "2020-07-17",
        set_type: "starter",
        card_count: 495,
        parent_set_code: "m21",
        digital: false,
        nonfoil_only: true,
        foil_only: false,
        icon_svg_uri: "https://img.scryfall.com/sets/jmp.svg?1592798400"
    },
    {
        object: "set",
        id: "bc94aba1-7376-4e02-a12d-3a2efb66ab0f",
        code: "m21",
        mtgo_code: "m21",
        arena_code: "m21",
        tcgplayer_id: 2653,
        name: "Core Set 2021",
        uri: "https://api.scryfall.com/sets/bc94aba1-7376-4e02-a12d-3a2efb66ab0f",
        scryfall_uri: "https://scryfall.com/sets/m21",
        search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Am21&unique=prints",
        released_at: "2020-07-03",
        set_type: "core",
        card_count: 397,
        digital: false,
        nonfoil_only: false,
        foil_only: false,
        block_code: "lea",
        block: "Core Set",
        icon_svg_uri: "https://img.scryfall.com/sets/m21.svg?1592798400"
    }   
]
}

export default function expansionsList(state = initialState, action) {
    switch (action.type) {
        case GET_EXPANSIONS_LIST:
            return {...state}
        default:
            return state
    }
}