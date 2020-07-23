import { CREATE_USER_COLLECTION, UPDATE_USER_COLLECTION } from '../actions/types'

/*Example state
    {
        sUserCollectionId: "hashedNumber",
        oUserCollection: {
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
            //If first entry in state
            if(Object.keys(state.oUserCollection).length === 0){
                state.oUserCollection = {
                    [action.payload.sCardId]: {
                        [action.payload.sTypeName]: action.payload.nAmt
                    }
                }
            }
            //If Card not in state
            else if(!(action.payload.sCardId in state.oUserCollection)){
                state.oUserCollection[action.payload.sCardId] = {
                    [action.payload.sTypeName]: action.payload.nAmt
                }
            }
            else{
                state.oUserCollection[action.payload.sCardId][action.payload.sTypeName] = action.payload.nAmt
            }
            return {...state}
        default:
            return state
    }
}