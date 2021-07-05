import { ActionType } from "../action-types/action";
import { Dispatch } from "redux";
import Action from "../actions";

export const fetchEmployees = () => {
  return (dispatch: Dispatch<Action>) => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        return response.json();
      })
      .then((res: any) => {
        if (res.status === "success") {
          return dispatch({
            type: ActionType.SUCCESS,
            payload: res.data,
          });
        }
        else if(res.status){
          return dispatch({
            type: ActionType.FAIL,
            payload: [],
          })
        }
      });
  };
};
