import { CompareActions } from "../actions";
const initialState = [];
 

 function compareReducer(state  , action) {
  switch (action.type) { 
    case "INIT_STATE":
      return action.payload;
    case CompareActions.ADD_SLOT:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          movie: null,
        },
      ];
    case CompareActions.DELETE_SLOT: 
      return state.filter((slot) => slot.id !== action.payload.id);

    case CompareActions.SELECT_MOVIE: 
      return state.map((slot) => 
        slot.id === action.payload.slotId
          ? {
              ...slot,
              movie: action.payload.movie,
            }
          : slot
      );
    case CompareActions.REMOVE_MOVIE: 
      return state.map((slot) => 
        slot.id === action.payload.slotId
          ? {
              ...slot,
              movie: null,
            }
          : slot
      );

    default:
      return state;
  }
}
export  {initialState, compareReducer}