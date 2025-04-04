import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { EmployeeFormComponent } from "./styles";
import { useFormik } from "formik";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .min(5, "min 5 symbols")
      .max(50, "max 50 symbols")
      .required("Required field"),
    age: Yup.number()
      .min(18, "min age 18")
      .max(80, "max age 80")
      .required("Required field")
      .integer("Age must be an integer number."),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
    } as unknown as EmployeeFormValues,

    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Input
        name="fullName"
        label="Full Name *"
        id="fullName_id"
        placeholder="Enter your full name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.errors.fullName}
      />

      <Input
        name="age"
        label="Age *"
        id="age_id"
        placeholder="Enter your age"
        //value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />

      <Button name="Submit" />
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
