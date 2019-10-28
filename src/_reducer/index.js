import { combineReducers } from 'redux-immutable'
import textFormatting from './textFormatting.reducer'
import synonymous from './synonymous.reducer'


const reducer = combineReducers({
    textFormatting,
    synonymous
})

export default reducer