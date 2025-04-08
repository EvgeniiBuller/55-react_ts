import * as Yup from "yup";
import { useFormik } from "formik";

import Input from "../../components/Input/Input";
import { Checkbox, CheckboxContainer, Homework15Container } from "./styles";
import { Homework15Values } from "./types";
import Button from "../../components/Button/Button";

function Homework15() {
  const schema = Yup.object().shape({
    validationCode: Yup.number()
      .typeError("Must be a number")
      .required("Validation code is required")
      .test(
        "len",
        "Validation code must be exactly 6 digits",
        (value) => value !== undefined && String(value).length === 6
      ),
    privacyPolicy: Yup.boolean()
      .oneOf([true], "You must accept the Privacy Policy")
      .required("Privacy Policy is required"),
  });

  const formik = useFormik({
    initialValues: {
      validationCode: "",
      privacyPolicy: false,
    } as Homework15Values,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Вы успешно вошли");
      console.table(values);
    },
  });

  return (
    <Homework15Container>
      <Input
        name="validationCode"
        label="Validation Code"
        id="validationCode_id"
        placeholder="Enter your employee code"
        value={formik.values.validationCode}
        onChange={formik.handleChange}
        error={formik.errors.validationCode}
      />
      <CheckboxContainer>
        <Checkbox>
          <Input
            name="privacyPolicy"
            type="checkbox"
            checked={formik.values.privacyPolicy}
            onChange={formik.handleChange}
          />
          Privacy and policy
        </Checkbox>
        {formik.errors.privacyPolicy && (
          <div style={{ color: "red" }}>{formik.errors.privacyPolicy}</div>
        )}
      </CheckboxContainer>
      <Button
        type="submit"
        onClick={formik.handleSubmit}
        disabled={formik.isSubmitting}
        name={""}
      />
      Login
    </Homework15Container>
  );
}

export default Homework15;
