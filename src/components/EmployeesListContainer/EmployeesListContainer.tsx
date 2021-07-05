import { DataGrid } from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";
import { Employees } from "../../models/Employee";
import "./EmployeesListContainer.css";



const EmployeesListContainer = (props: {
  filteredEmployees: Employees[],
}) => {
  const history = useHistory();

  const columns = [
    { field: "id", headerName: "Id" },
    { field: "employee_name", headerName: "Name", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "employee_salary", headerName: "Salary ", flex: 1 },
    { field: "employee_age", headerName: "Age", flex: 1 },
  ];

  return (
    <div className="list-view-container">
      
      <DataGrid
        rows={props.filteredEmployees}
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
