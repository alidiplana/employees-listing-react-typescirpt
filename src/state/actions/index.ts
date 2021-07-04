import { Employees } from '../../models/Employee';
import { ActionType } from '../action-types/action';


interface EmployeeAction{
  type: ActionType.SUCCESS;
  payload: Employees;
}

type Action = EmployeeAction;

export default Action;
