import {handleResponse} from '../util/HandleResponse'

export const getSynonymous = (word) => {

    const requestOptions = {
        method : 'GET',
        headers : { 'Content-Type' : 'application/json'}
    }
      
    try{

        return fetch(`/words?ml=${word}`, requestOptions).then(handleResponse)

    } catch(e) {
        
        return Promise.reject(e)
    }
}
