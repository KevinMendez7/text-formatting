import { getSynonymous as getSynonymousService } from '../_service/synonymous.service'
import * as synonymousActionTypes from '../_action_type/synonymous.action_type'


export const restart = value => {
    return {
        type: synonymousActionTypes.RESTART,
        payload: value
    }
}

export const changeValue = value => {
    return {
        type: synonymousActionTypes.SET_CHANGE_VALUE,
        payload: value
    }
}

export const setStopRequest = (value) =>{
    return {
        type: synonymousActionTypes.SET_STOP_REQUEST_VALUE,
        payload: value
    }
}

export const setSynonymousValue = (value) =>{
    return {
        type: synonymousActionTypes.SET_SYNONYMOUS_VALUE,
        payload: value
    }
}

export const getSynonymous = (word) => {
    return dispatch => {
        dispatch(request())

        return getSynonymousService(word).then(
            resp => dispatch(success(resp)),

            error => dispatch(failure(error))
        )
    }

    function request() { return { type: synonymousActionTypes.GET_API_REQUEST}}
    function success(rooms) { return { type: synonymousActionTypes.GET_API_SUCCESS, payload : rooms}}
    function failure(err) { return { type: synonymousActionTypes.GET_API_FAILURE, payload : err}}
}