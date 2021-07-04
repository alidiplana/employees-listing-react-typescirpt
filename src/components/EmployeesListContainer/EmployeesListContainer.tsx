import { DataGrid } from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";
import { Employees } from "../../models/Employee";
import { State } from "../../state";
import { useSelector } from "react-redux";
import "./EmployeesListContainer.css";
import { actionCreators } from "../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";


type EmployeeTypes = { 
  employees: Array<Employees>;
};


const EmployeesListContainer = (props: {
  genderState: string;
  genderChangeHandler: any;
  searchHandler: any;
  searchValue: string;
}) => {
  const history = useHistory();
  const [search, setSearch] = useState(props.searchValue);

  const columns = [
    { field: "id", headerName: "Id" },
    { field: "employee_name", headerName: "Name", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "employee_salary", headerName: "Salary ", flex: 1 },
    { field: "employee_age", headerName: "Age", flex: 1 },
  ];

  const data: EmployeeTypes = useSelector((state: State) => state.bank);
  data.employees.map((element, index) => {
    return element.id % 2 === 1
      ? (element.gender = "female")
      : (element.gender = "male");
  });
  const dispatch = useDispatch();
  const { fetchEmployees } = bindActionCreators(actionCreators, dispatch);


  let filteredEmployees: Employees[] = [];
  
    filteredEmployees = data.employees.filter(
      (element: Employees, index: number) => {
        return (
          (element.gender === props.genderState || props.genderState === '') &&
          element.employee_name.toLowerCase().includes(search.toLowerCase())
        );
      }
    );


  const searchHandler = (event: any) => {
    props.searchHandler(event);

    setSearch (event.target.value);
  }
  return (
    <div className="list-view-container">

      <TextField
          onChange={searchHandler}
          value={props.searchValue}
          className="button-style"
          id="standard-basic"
          label="Search"
        />
      
      <button onClick={() => fetchEmployees()}>Employees</button>
      <DataGrid
        rows={filteredEmployees}
        columns={columns}
        pageSize={10}
        onSelectionModelChange={(newSelection) => {
          return history.push("/view-profile/" + newSelection.selectionModel);
        }}
      />
    </div>
  );
};

export default EmployeesListContainer;
