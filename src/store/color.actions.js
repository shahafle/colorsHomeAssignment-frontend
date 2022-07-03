import { colorService } from "../services/color.service.js";

export function loadColors() {
    return async (dispatch) => {
        try {
            const colors = await colorService.query()
            dispatch({
                type: 'SET_COLORS',
                colors
            })
        } catch (err) {
            console.log('Cannot load colors', err)
        }

    }
}

export function addVote(colorId) {
    return async (dispatch) => {
        try {
            const color = await colorService.addVote(colorId)
            dispatch({
                type: 'UPDATE_COLOR',
                color: color
            })
        } catch (err) {
            console.log('Cannot add color', err)
        }
    }
}

export function removeColor(colorId) {
    return async (dispatch) => {
        try {
            await colorService.remove(colorId)
            dispatch({
                type: 'REMOVE_COLOR',
                colorId
            })
        } catch (err) {
            console.log('Cannot remove color', err)
        }
    }
}

export function addColor(color) {
    return async (dispatch) => {
        try {
            const savedColor = colorService.save(color)
            dispatch({
                type: 'ADD_COLOR',
                color: savedColor
            })
        } catch (err) {
            console.log('Cannot add color', err)
        }
    }
}

export function updateColor(color) {
    return async (dispatch) => {
        try {
            const savedColor = colorService.save(color)
            dispatch({
                type: 'UPDATE_COLOR',
                color: savedColor
            })
        } catch (err) {
            console.log('Cannot save color', err)
        }
    }
}