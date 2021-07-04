import "./EmployeesList.css";
import { useState } from "react";
import EmployeesListContainer from "../EmployeesListContainer/EmployeesListContainer";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";

const EmployeesList = () => {

  const [genderState, setGenderState] = useState("male");
  const [femaleSearch, searchFemaleState] = useState("");
  const [maleSearch, searchMaleState] = useState("");
  let searchValue: string = '';

  if(genderState === 'male'){
    searchValue = maleSearch
  } else if (genderState === 'female'){
    searchValue = femaleSearch
  }

  const searchHandler = (event: any) => {
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
    } else if (val === "female") {
    }
  };

  return (
    <div className="list-view-container">
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

        
      </div>

      <EmployeesListContainer
        genderState={genderState}
        genderChangeHandler={genderChangeHandler}
        searchHandler={searchHandler}
        searchValue={searchValue}
      />
    </div>
  );
};

export default EmployeesList;
