import { CREATE_USER_COLLECTION, UPDATE_USER_COLLECTION } from '../actions/types'

/*Example state
    {
        sUserCollectionId: "hashedNumber",
        oUserCollection: {
            "expansionId": {
                "cardId": {
                    "nRegularAmount": "integer",
                    "nFoilAmount": "integer"
                },
                "cardId": {
                    "nRegularAmount": "integer",
                    "nFoilAmount": "integer"
                }
            },
            "expansionId": {
                "cardId": {
                    "nRegularAmount": "integer",
                    "nFoilAmount": "integer"
                },
                "cardId": {
                    "nRegularAmount": "integer",
                    "nFoilAmount": "integer"
                }
            }
        }        
    }
*/

const initialState = {
    sUserCollectionId: null,
    oUserCollection: {}
}

export default function currentUserCollection(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER_COLLECTION:
            return {
                sUserCollectionId: action.payload.sUserCollectionId,
                oUserCollection: {}
            }
        case UPDATE_USER_COLLECTION:
            //Iterate through all cards in staging area
            for(let sCardId in action.payload.oCardsToUpdate){
                let sExpansionKey = action.payload.oCardsToUpdate[sCardId].sExpansionId

                //Check for expansion first
                if(!state.oUserCollection[sExpansionKey]){
                    //If no previous cards within expansion, create expansion object
                    state.oUserCollection[sExpansionKey] = {}
                }
                
                //If expansion already exists, check if card exists in set
                if(!state.oUserCollection[sExpansionKey][sCardId]){
                    //If Card not already in collection, create card object
                    state.oUserCollection[sExpansionKey][sCardId] = {}
                }

                //Update card object with regular amounts
                if(action.payload.oCardsToUpdate[sCardId]["nRegularAmount"] || action.payload.oCardsToUpdate[sCardId]["nRegularAmount"] === 0){
                    state.oUserCollection[sExpansionKey][sCardId]["nRegularAmount"] = action.payload.oCardsToUpdate[sCardId].nRegularAmount
                } 

                //Update card object with foil amounts
                if(action.payload.oCardsToUpdate[sCardId].nFoilAmount || action.payload.oCardsToUpdate[sCardId]["nFoilAmount"] === 0){
                    state.oUserCollection[sExpansionKey][sCardId]["nFoilAmount"] = action.payload.oCardsToUpdate[sCardId].nFoilAmount
                } 

                //If no reg or foil amounts, remove the card from collection
                if((state.oUserCollection[sExpansionKey][sCardId]["nRegularAmount"] === 0 || state.oUserCollection[sExpansionKey][sCardId]["nRegularAmount"] === undefined) 
                    && (state.oUserCollection[sExpansionKey][sCardId]["nFoilAmount"] === 0 || state.oUserCollection[sExpansionKey][sCardId]["nFoilAmount"] === undefined)){
                        delete state.oUserCollection[sExpansionKey][sCardId]
                }

                //If no cards in expansion, remove expansion
                if(!Object.keys(state.oUserCollection[sExpansionKey]).length){
                    delete state.oUserCollection[sExpansionKey]
                }
            }

            return {...state}
            
        default:
            return state
    }
}