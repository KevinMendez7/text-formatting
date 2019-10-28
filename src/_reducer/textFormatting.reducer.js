import { fromJS } from 'immutable'
import * as textActionTypes from '../_action_type/textFormatting.action_type'

const initialState = fromJS({
    bold : false,
    italic: false,
    underline : false,
    indent : 0,
    color : null
})

const textFormatting = (state = initialState, action) => {
    switch (action.type) {
        case textActionTypes.SET_BOLD_FORMAT:
            return state.set('bold', action.payload)
        case textActionTypes.SET_ITALIC_FORMAT:
            return state.set('italic', action.payload)
        case textActionTypes.SET_UNDERLINE_FORMAT:
            return state.set('underline', action.payload)
        case textActionTypes.SET_INDENT_FORMAT:
            return state.set('indent', action.payload)
        case textActionTypes.SET_COLOR_FORMAT:
            return state.set('color', action.payload)
        default:
            return state
    }
}

export default textFormatting