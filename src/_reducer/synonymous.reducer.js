import { fromJS } from 'immutable'
import * as synonymousActionTypes from '../_action_type/synonymous.action_type'

const initialState = fromJS({
    request: false,
    synonymous: [],
    error: null
})

const synonymous = (state = initialState, action) => {
    switch (action.type) {
        case synonymousActionTypes.GET_API_REQUEST:
            return state.set('request', true)
        case synonymousActionTypes.GET_API_SUCCESS:
            return state.set('synonymous', action.payload).set('request'), false
        case synonymousActionTypes.GET_API_FAILURE:
            return state.set('error', action.payload)
        default:
            return state
    }
}

export default synonymous