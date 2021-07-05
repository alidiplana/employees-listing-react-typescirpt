export class Employees {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
  gender: string;

  constructor(
    id: number,
    employee_salary: number,
    employee_age: number,
    employee_name: string,
    profile_image: string,
    gender: string
  ) {
    this.id = id;
    this.employee_age = employee_age;
    this.employee_name = employee_name;
    this.employee_salary = employee_salary;
    this.profile_image = profile_image;
    this.gender = gender;
  }
}
