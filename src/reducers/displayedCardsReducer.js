import { GET_DISPLAYED_CARDS } from '../actions/types'

const initialState = {
    data: [
        {
            object: "card",
            id: "8676d164-c76e-402b-a649-6ded3f549b6e",
            oracle_id: "01546b7d-a233-4176-8843-d732074dc5b6",
            multiverse_ids: [ ],
            tcgplayer_id: 214841,
            name: "Doubling Season",
            lang: "en",
            released_at: "2020-08-07",
            uri: "https://api.scryfall.com/cards/8676d164-c76e-402b-a649-6ded3f549b6e",
            scryfall_uri: "https://scryfall.com/card/2xm/164/doubling-season?utm_source=api",
            layout: "normal",
            highres_image: true,
            image_uris: {
            small: "https://img.scryfall.com/cards/small/front/8/6/8676d164-c76e-402b-a649-6ded3f549b6e.jpg?1590160711",
            normal: "https://img.scryfall.com/cards/normal/front/8/6/8676d164-c76e-402b-a649-6ded3f549b6e.jpg?1590160711",
            large: "https://img.scryfall.com/cards/large/front/8/6/8676d164-c76e-402b-a649-6ded3f549b6e.jpg?1590160711",
            png: "https://img.scryfall.com/cards/png/front/8/6/8676d164-c76e-402b-a649-6ded3f549b6e.png?1590160711",
            art_crop: "https://img.scryfall.com/cards/art_crop/front/8/6/8676d164-c76e-402b-a649-6ded3f549b6e.jpg?1590160711",
            border_crop: "https://img.scryfall.com/cards/border_crop/front/8/6/8676d164-c76e-402b-a649-6ded3f549b6e.jpg?1590160711"
            },
            mana_cost: "{4}{G}",
            cmc: 5,
            type_line: "Enchantment",
            oracle_text: "If an effect would create one or more tokens under your control, it creates twice that many of those tokens instead. If an effect would put one or more counters on a permanent you control, it puts twice that many of those counters on that permanent instead.",
            colors: [
            "G"
            ],
            color_identity: [
            "G"
            ],
            keywords: [ ],
            legalities: {
            standard: "not_legal",
            future: "not_legal",
            historic: "not_legal",
            pioneer: "not_legal",
            modern: "legal",
            legacy: "legal",
            pauper: "not_legal",
            vintage: "legal",
            penny: "not_legal",
            commander: "legal",
            brawl: "not_legal",
            duel: "legal",
            oldschool: "not_legal"
            },
            games: [
            "paper",
            "mtgo"
            ],
            reserved: false,
            foil: true,
            nonfoil: true,
            oversized: false,
            promo: false,
            reprint: true,
            variation: false,
            set: "2xm",
            set_name: "Double Masters",
            set_type: "masters",
            set_uri: "https://api.scryfall.com/sets/372dafe8-b5d1-4b81-998f-3ae96b59498a",
            set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3A2xm&unique=prints",
            scryfall_set_uri: "https://scryfall.com/sets/2xm?utm_source=api",
            rulings_uri: "https://api.scryfall.com/cards/8676d164-c76e-402b-a649-6ded3f549b6e/rulings",
            prints_search_uri: "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A01546b7d-a233-4176-8843-d732074dc5b6&unique=prints",
            collector_number: "164",
            digital: false,
            rarity: "mythic",
            card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
            artist: "Chuck Lukacs",
            artist_ids: [
            "2bdf4da7-c66c-4c46-a253-284c856ccfab"
            ],
            illustration_id: "325884d5-0e57-4cbf-aa39-2a7b7ec645ae",
            border_color: "black",
            frame: "2015",
            full_art: false,
            textless: false,
            booster: true,
            story_spotlight: false,
            edhrec_rank: 322,
            preview: {
            source: "Wizards of the Coast",
            source_uri: "https://magic.wizards.com/en/articles/archive/news/announcing-double-masters-2020-05-21",
            previewed_at: "2020-05-21"
            },
            prices: {
            usd: "49.34",
            usd_foil: null,
            eur: "25.47",
            tix: null
            },
            related_uris: {
            tcgplayer_decks: "https://decks.tcgplayer.com/magic/deck/search?contains=Doubling+Season&page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
            edhrec: "https://edhrec.com/route/?cc=Doubling+Season",
            mtgtop8: "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Doubling+Season"
            },
            purchase_uris: {
            tcgplayer: "https://shop.tcgplayer.com/product/productsearch?id=214841&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
            cardmarket: "https://www.cardmarket.com/en/Magic/Products/Singles/Double-Masters/Doubling-Season?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
            cardhoarder: "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Doubling+Season&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
            }
        },
        {
            object: "card",
            id: "d0d33d52-3d28-4635-b985-51e126289259",
            oracle_id: "7e6b9b59-cd68-4e3c-827b-38833c92d6eb",
            multiverse_ids: [ ],
            tcgplayer_id: 214833,
            name: "Atraxa, Praetors' Voice",
            lang: "en",
            released_at: "2020-08-07",
            uri: "https://api.scryfall.com/cards/d0d33d52-3d28-4635-b985-51e126289259",
            scryfall_uri: "https://scryfall.com/card/2xm/190/atraxa-praetors-voice?utm_source=api",
            layout: "normal",
            highres_image: true,
            image_uris: {
            small: "https://img.scryfall.com/cards/small/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1590222943",
            normal: "https://img.scryfall.com/cards/normal/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1590222943",
            large: "https://img.scryfall.com/cards/large/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1590222943",
            png: "https://img.scryfall.com/cards/png/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.png?1590222943",
            art_crop: "https://img.scryfall.com/cards/art_crop/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1590222943",
            border_crop: "https://img.scryfall.com/cards/border_crop/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.jpg?1590222943"
            },
            mana_cost: "{G}{W}{U}{B}",
            cmc: 4,
            type_line: "Legendary Creature — Angel Horror",
            oracle_text: "Flying, vigilance, deathtouch, lifelink At the beginning of your end step, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
            power: "4",
            toughness: "4",
            colors: [
            "B",
            "G",
            "U",
            "W"
            ],
            color_identity: [
            "B",
            "G",
            "U",
            "W"
            ],
            keywords: [
            "Deathtouch",
            "Flying",
            "Lifelink",
            "Vigilance",
            "Proliferate"
            ],
            legalities: {
            standard: "not_legal",
            future: "not_legal",
            historic: "not_legal",
            pioneer: "not_legal",
            modern: "not_legal",
            legacy: "legal",
            pauper: "not_legal",
            vintage: "legal",
            penny: "not_legal",
            commander: "legal",
            brawl: "not_legal",
            duel: "legal",
            oldschool: "not_legal"
            },
            games: [
            "paper",
            "mtgo"
            ],
            reserved: false,
            foil: true,
            nonfoil: true,
            oversized: false,
            promo: false,
            reprint: true,
            variation: false,
            set: "2xm",
            set_name: "Double Masters",
            set_type: "masters",
            set_uri: "https://api.scryfall.com/sets/372dafe8-b5d1-4b81-998f-3ae96b59498a",
            set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3A2xm&unique=prints",
            scryfall_set_uri: "https://scryfall.com/sets/2xm?utm_source=api",
            rulings_uri: "https://api.scryfall.com/cards/d0d33d52-3d28-4635-b985-51e126289259/rulings",
            prints_search_uri: "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A7e6b9b59-cd68-4e3c-827b-38833c92d6eb&unique=prints",
            collector_number: "190",
            digital: false,
            rarity: "mythic",
            card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
            artist: "Victor Adame Minguez",
            artist_ids: [
            "bd8f7368-5b10-4554-b6b8-d052c6aca89f"
            ],
            illustration_id: "aa6efe75-3fa3-42cd-800e-23320b431646",
            border_color: "black",
            frame: "2015",
            frame_effects: [
            "legendary"
            ],
            full_art: false,
            textless: false,
            booster: true,
            story_spotlight: false,
            edhrec_rank: 1087,
            preview: {
            source: "Wizards of the Coast",
            source_uri: "https://magic.wizards.com/ru/articles/archive/news/dopolnitelnoe-obyavlenie-o-vyhode-double-masters-2020-05-21",
            previewed_at: "2020-05-21"
            },
            prices: {
            usd: "39.31",
            usd_foil: null,
            eur: "23.99",
            tix: null
            },
            related_uris: {
            tcgplayer_decks: "https://decks.tcgplayer.com/magic/deck/search?contains=Atraxa%2C+Praetors%27+Voice&page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
            edhrec: "https://edhrec.com/route/?cc=Atraxa%2C+Praetors%27+Voice",
            mtgtop8: "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Atraxa%2C+Praetors%27+Voice"
            },
            purchase_uris: {
            tcgplayer: "https://shop.tcgplayer.com/product/productsearch?id=214833&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
            cardmarket: "https://www.cardmarket.com/en/Magic/Products/Singles/Double-Masters/Atraxa-Praetors-Voice?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
            cardhoarder: "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Atraxa%2C+Praetors%27+Voice&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
            }
        }

    ]
}

export default function currentDisplayedCards(state = initialState, action) {
    switch (action.type) {
        case GET_DISPLAYED_CARDS:
            return {...state}
        default:
            return state
    }
}