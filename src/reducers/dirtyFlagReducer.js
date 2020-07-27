import { UPDATE_STAGING_AREA } from '../actions/types'

/*Example state
    {
        isDirtyFlag: false,
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
    isDirtyFlag: false,
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
            state.isDirtyFlag = true
            return {...state}
        default:
            return state
    }
}