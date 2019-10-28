import * as textActionTypes from '../_action_type/textFormatting.action_type'

export const setBold = (value) => {
    return {
        type: textActionTypes.SET_BOLD_FORMAT,
        payload: value
    }
}

export const setItalic = (value) => {
    return {
        type: textActionTypes.SET_ITALIC_FORMAT,
        payload: value
    }
}

export const setUnderline = (value) => {
    return {
        type: textActionTypes.SET_UNDERLINE_FORMAT,
        payload: value
    }
}

export const setColor = (value) => {
    return {
        type: textActionTypes.SET_COLOR_FORMAT,
        payload: value
    }
}

export const setIndent = (value) => {
    return {
        type: textActionTypes.SET_INDENT_FORMAT,
        payload: value
    }
}