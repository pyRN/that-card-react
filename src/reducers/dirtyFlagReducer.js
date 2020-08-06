import { RESET_STAGING_AREA, UPDATE_STAGING_AREA } from '../actions/types'

/*Example state
    {
        bIsDirtyFlag: false,
        oCardStaging: {
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
    bIsDirtyFlag: false,
    oCardStaging: {}
}

export default function dirtyFlag(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case UPDATE_STAGING_AREA:
            //If card is not in state, create the object
            if(!state.oCardStaging[action.payload.sCardId]){
                state.oCardStaging[action.payload.sCardId] = {}
            }

            //Update the object with owned amounts
            state.oCardStaging[action.payload.sCardId][action.payload.sTypeName] = action.payload.nAmt
            state.oCardStaging[action.payload.sCardId]["sExpansionId"] = action.payload.sExpansionId
            state.bIsDirtyFlag = true
            return {...state}
        case RESET_STAGING_AREA:
            return {
                bIsDirtyFlag: false,
                oCardStaging: {}
            }
        default:
            return state
    }
}