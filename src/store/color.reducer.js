const initialState = {
   colors: [],
   lastRemovedColor: null
}


export function colorReducer(state = initialState, action) {
   let newState = state
   let colors
   switch (action.type) {
      case 'SET_COLORS':
         newState = { ...state, colors: action.colors }
         break
      case 'UPDATE_COLOR':
         colors = state.colors.map(color => (color.id === action.color.id) ? action.color : color)
         newState = { ...state, colors: colors }
         break

      default:
   }

   return newState

}
