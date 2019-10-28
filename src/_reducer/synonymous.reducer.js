import { fromJS } from 'immutable'
import * as synonymousActionTypes from '../_action_type/synonymous.action_type'

const initialState = fromJS({
    synonymousValue : false,
    stopRequest : false,
    request: false,
    restart: false,
    change: null,
    synonymous: [],
    error: null
})

const synonymous = (state = initialState, action) => {
    switch (action.type) {
        case synonymousActionTypes.RESTART:
            return state.set('restart', action.payload)
                        .set('synonymousValue', false)  
                        .set('stopRequest', false)  
                        .set('request', false)  
                        .set('change', null)  
                        .set('synonymous', [])  
        case synonymousActionTypes.SET_SYNONYMOUS_VALUE:
            return state.set('synonymousValue', action.payload)  
        case synonymousActionTypes.SET_CHANGE_VALUE:
            return state.set('change', action.payload)  
        case synonymousActionTypes.SET_STOP_REQUEST_VALUE:
            return state.set('stopRequest', action.payload)        
        case synonymousActionTypes.GET_API_REQUEST:
            return state.set('request', true)
        case synonymousActionTypes.GET_API_SUCCESS:
            return state.set('synonymous', action.payload).set('request', false)
        case synonymousActionTypes.GET_API_FAILURE:
            return state.set('error', action.payload)
        default:
            return state
    }
}

export default synonymous