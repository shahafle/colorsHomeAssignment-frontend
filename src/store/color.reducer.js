// const colors = [
//    {
//       id: 1,
//       name: 'green',
//       hex: '#008000',
//       votes: 3
//    },
//    {
//       id: 2,
//       name: 'yellow',
//       hex: '#ffff00',
//       votes: 20
//    },
//    {
//       id: 3,
//       name: 'red',
//       hex: '#ff0000',
//       votes: 1
//    },
//    {
//       id: 4,
//       name: 'blue',
//       hex: '#0000ff',
//       votes: 10
//    }
// ]

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
      case 'REMOVE_COLOR':
         const lastRemovedColor = state.colors.find(color => color._id === action.colorId)
         colors = state.colors.filter(color => color._id !== action.colorId)
         newState = { ...state, colors: colors, lastRemovedColor }
         break
      case 'ADD_COLOR':
         newState = { ...state, colors: [...state.colors, action.color] }
         break
      case 'UPDATE_COLOR':
         colors = state.colors.map(color => (color._id === action.color._id) ? action.color : color)
         newState = { ...state, colors: colors }
         break
      case 'UNDO_REMOVE_COLOR':
         if (state.lastRemovedColor) {
            newState = { ...state, colors: [...state.colors, state.lastRemovedColor], lastRemovedColor: null }
         }
         break
      default:
   }

   return newState

}
