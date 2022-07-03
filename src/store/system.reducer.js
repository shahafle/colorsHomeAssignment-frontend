const initialState = {
   message: {
      type: '',
      txt: ''
   }
}
export function systemReducer(state = initialState, action) {
   let newState = state
   switch (action.type) {
      case 'SET_MSG':
         const { msgType, txt } = action
         newState = { ...state, message: { type: msgType, txt } }
         break
      default:
   }

   return newState

}
