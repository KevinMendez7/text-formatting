import { getSynonymous as getSynonymousService } from '../_services/Room.service'
import * as synonymousActionTypes from '../_action_type/synonymous.action_type'

export const getSynonymous = () => {
    return dispatch => {
        dispatch(request())

        return getSynonymousService().then(
            resp => dispatch(success(Object.values(resp))),

            error => dispatch(failure(error))
        )
    }

    function request() { return { type: synonymousActionTypes.GET_API_REQUEST}}
    function success(rooms) { return { type: synonymousActionTypes.GET_API_SUCCESS, payload : rooms}}
    function failure(err) { return { type: synonymousActionTypes.GET_API_FAILURE, payload : err}}
}