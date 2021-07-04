import EmployeesList from "./components/employeesList/EmployeesList";
import { Route } from "react-router";
import { Redirect } from "react-router";
import ViewProfile from "./components/ViewProfile";

const App = () => {

  return (
    <div className="App">
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <EmployeesList />
      </Route>
      <Route path="/view-profile"> 
        <ViewProfile />
      </Route>

    </div>
  );
}

export default App;
