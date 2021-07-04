import { ActionType } from "../action-types/action";
import Action from "../actions";


const initialState = {
  employees: [],
};

const bankReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SUCCESS:
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};

export default bankReducer;
