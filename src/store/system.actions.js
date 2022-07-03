export function showMsg(msgType, txt) {
    return (dispatch) => {
        dispatch({
            type: 'SET_MSG',
            msgType,
            txt
        })
    }
}
