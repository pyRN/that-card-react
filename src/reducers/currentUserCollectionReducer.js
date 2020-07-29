import { CREATE_USER_COLLECTION, UPDATE_USER_COLLECTION } from '../actions/types'

/*Example state
    {
        sUserCollectionId: "hashedNumber",
        oUserCollection: {
            "cardId": {
                "nRegularAmount": "integer",
                "nFoilAmount": "integer",
                "sExpansionId" "string"
            },
            "cardId": {
                "nRegularAmount": "integer",
                "nFoilAmount": "integer",
                "sExpansionId" "string"
            }
        }
    }
*/

const initialState = {
    sUserCollectionId: null,
    oUserCollection: {}
}

export default function currentUserCollection(state = initialState, action) {
    console.log("Payload", action.payload)
    switch (action.type) {
        case CREATE_USER_COLLECTION:
            return {
                sUserCollectionId: action.payload.sUserCollectionId,
                oUserCollection: {}
            }
        case UPDATE_USER_COLLECTION:
            //Iterate through all cards in staging area
            for(let sCardId in action.payload.oCardsToUpdate){

                //If card is not in state, create the object
                if(!state.oUserCollection[sCardId]){
                    state.oUserCollection[sCardId] = {}
                }

                //Update the object with owned amounts
                if(action.payload.oCardsToUpdate[sCardId]["nRegularAmount"] || action.payload.oCardsToUpdate[sCardId]["nRegularAmount"] === 0){
                    state.oUserCollection[sCardId]["nRegularAmount"] = action.payload.oCardsToUpdate[sCardId].nRegularAmount
                } 

                if(action.payload.oCardsToUpdate[sCardId].nFoilAmount || action.payload.oCardsToUpdate[sCardId]["nFoilAmount"] === 0){
                    state.oUserCollection[sCardId]["nFoilAmount"] = action.payload.oCardsToUpdate[sCardId].nFoilAmount
                } 

                state.oUserCollection[sCardId]["sExpansionId"] = action.payload.oCardsToUpdate[sCardId].sExpansionId
            }
            console.log("State", state)

            return {...state}
            
        default:
            return state
    }
}