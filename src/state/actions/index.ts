import { Employees } from '../../models/Employee';
import { ActionType } from '../action-types/action';


interface EmployeeSUCCESS{
  type: ActionType.SUCCESS;
  payload: Employees;
}

interface EmployeeFAIL{
    type: ActionType.FAIL;
    payload: []
}

type Action = EmployeeSUCCESS | EmployeeFAIL;

export default Action;
