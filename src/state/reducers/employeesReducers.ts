import { ActionType } from "../action-types/action";
import Action from "../actions";


const initialState = {
  employees: [],
};

const employeesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SUCCESS:
      return {
        ...state,
        employees: action.payload,
      }
    case ActionType.FAIL: 
      return {
        ...state,
        employees: []
      }
    default:
      return state;
  }
};

export default employeesReducer;
