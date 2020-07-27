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
    switch (action.type) {
        case CREATE_USER_COLLECTION:
            return {
                sUserCollectionId: action.payload.sUserCollectionId,
                oUserCollection: {}
            }
        case UPDATE_USER_COLLECTION:
            //If card is not in state, create the object
            if(!state.oUserCollection[action.payload.sCardId]){
                state.oUserCollection[action.payload.sCardId] = {}
            }

            //Update the object with owned amounts
            state.oUserCollection[action.payload.sCardId][action.payload.sTypeName] = action.payload.nAmt
            state.oUserCollection[action.payload.sCardId]["sExpansionId"] = action.payload.sExpansionId
            return {...state}
            
        default:
            return state
    }
}