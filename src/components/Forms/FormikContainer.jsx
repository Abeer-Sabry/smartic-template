import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Address: "",
  };
  const validationSchema = Yup.object({
    FirstName: Yup.string().required("FIRSTNAME IS REQUIRED"),
    LastName: Yup.string().required("LASTNAME IS REQUIRED"),
    Email: Yup.string()
      .email("Invalid Email Format")
      .required("EMAIL IS REQUIRED"),
    Password: Yup.string().required("PASSWORD IS REQUIRED"),
    ConfirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("Password"), ""],
        "PASSWORD CONFIRMATION DOESN'T MATCH PASSWORD"
      )
      .required("CONFIRMATION PASSWORD IS REQUIRED"),
    Address: Yup.string().required("REQUIRED"),
  });
  // const onSubmit = (values) => {
  //   console.log("FormContainer", values);
  // };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // console.log("FormContainer", values);
        }}
      >
        {(formik) => {
          // console.log('formikdataControl', formik)
          return (
            <Form className="p-5 d-flex flex-column w-50">
              <FormikControl
                className=" p-2"
                type="text"
                control="input"
                name="FirstName"
                label="FirstName"
              />
              <FormikControl
                className=" p-2"
                type="text"
                control="input"
                name="LastName"
                label="LastName"
              />
              <FormikControl
                className=" p-2"
                type="text"
                control="input"
                name="Email"
                label="Email"
              />
              <FormikControl
                className=" p-2"
                type="text"
                control="input"
                name="Password"
                label="Password"
              />
              <FormikControl
                className=" p-2"
                type="text"
                control="input"
                name="ConfirmPassword"
                label="ConfirmPassword"
              />
              <FormikControl
                className=" p-2"
                type="text"
                control="input"
                name="Address"
                label="Address"
              />
              <div>
                <button type="submit" className="bg-color text-white p-2 button">Submit</button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  );
};

export default FormikContainer;
