import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Employees } from "../models/Employee";
import { State } from "../state";
import { Image } from "antd";
import './ViewProfile.css';


type EmployeeTypes = {
  employees: Array<Employees>;
};

const ViewProfile = () => {
  const data: EmployeeTypes = useSelector((state: State) => state.bank);
  const { id } = useParams<{ id: string }>();

  console.log(id);


  const selectedEmployee: Employees | any = data.employees.find((element) => {
    return element.id.toString() === id;
  });


  return (
    <div className="profile-container">
      <div>
        <div className="image-container">
          <Image
            className="image"
            preview={false}
            width={200}
            height={200}
            src={"https://pic.onlinewebfonts.com/svg/img_262999.png"}
          />
          <br />
        </div>
      </div>
      <div className="detail-container">
       
      </div>
    </div>
  );
};

export default ViewProfile;
