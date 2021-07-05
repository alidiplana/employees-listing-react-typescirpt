import "./EmployeesList.css";
import EmployeesListContainer from "../EmployeesListContainer/EmployeesListContainer";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { Employees } from "../../models/Employee";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { actionCreators } from "../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { State } from "../../state";
import { useSelector } from "react-redux";
import { IoReload } from "react-icons/io5";
import { useEffect } from "react";

type EmployeeTypes = {
  employees: Array<Employees>;
};

const EmployeesList = () => {
  const [genderState, setGenderState] = useState("male");
  const [femaleSearch, searchFemaleState] = useState("");
  const [maleSearch, searchMaleState] = useState("");

  let searchValue: string = "";
  const [search, setSearch] = useState(searchValue);

  if (genderState === "male") {
    searchValue = maleSearch;
  } else if (genderState === "female") {
    searchValue = femaleSearch;
  }

  const searchHandler = (event: any) => {
    setSearch(event.target.value);
    if (genderState === "male") {
      searchMaleState(event.target.value);
    }

    if (genderState === "female") {
      searchFemaleState(event.target.value);
    }
  };

  const genderChangeHandler = (event: any, val: string) => {
    setGenderState(val);
    if (val === "male") {
      setSearch(maleSearch);
    } else if (val === "female") {
      setSearch(femaleSearch);
    }
  };

  const dispatch = useDispatch();
  const { fetchEmployees } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const data: EmployeeTypes = useSelector((state: State) => state.bank);
  data.employees.map((element, index) => {
    return element.id % 2 === 1
      ? (element.gender = "female")
      : (element.gender = "male");
  });
  let filteredEmployees: Employees[] = [];

  filteredEmployees = data.employees.filter(
    (element: Employees, index: number) => {
      return (
        (element.gender === genderState || genderState === "") &&
        element.employee_name.toLowerCase().includes(search.toLowerCase())
      );
    }
  );

  return (
    <div className="list-view-container">
      <div className="header">
        <h1 className="heading">Employees Listing</h1>
      </div>
      <div className="button-container">
        <ToggleButtonGroup
          className="toggle-style"
          value={genderState}
          exclusive
          onChange={genderChangeHandler}
          aria-label="text alignment"
        >
          <ToggleButton value="male">
            <FaMale />
          </ToggleButton>
          <ToggleButton value="female">
            <FaFemale />
          </ToggleButton>
        </ToggleButtonGroup>

        <button onClick={() => fetchEmployees()}>
          <IoReload />
        </button>

        
        <TextField
          onChange={searchHandler}
          value={searchValue}
          className="button-style"
          id="standard-basic"
          label="Search"
        />
      </div>

      <div className="table-style">
        <EmployeesListContainer filteredEmployees={filteredEmployees} />
      </div>
    </div>
  );
};

export default EmployeesList;
