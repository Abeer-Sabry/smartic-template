import React from "react";
import { useDispatch } from "react-redux";
import userRegisterAction from "../../Redux/User/action";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import TextError from "../Forms/TextError";
import { useSelector } from "react-redux";
// import FormikContainer from "../Forms/FormikContainer";

const initialValues = {
  name: "",
  email: "",
  password: "",
  ConfirmPassword: "",
  age: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("NAME IS REQUIRED"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("EMAIL IS REQUIRED"),
  password: Yup.string().required("PASSWORD IS REQUIRED"),
  ConfirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), ""],
      "PASSWORD CONFIRMATION DOESN'T MATCH PASSWORD"
    )
    .required("CONFIRMATION PASSWORD IS REQUIRED"),
  age: Yup.string().required("REQUIRED"),
});

const UserRegister = () => {
  const dispatch = useDispatch();
  const { loading, err } = useSelector(({ user }) => user)

  return (
    <>
      <div className="container section">
        <div className="text-center m-auto col-md-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {

              const { ConfirmPassword, Address, ...data } = values;
              dispatch(userRegisterAction(data));
            }}
          >
            {(formik) => {
              return (
                <Form method="POST">

                  <Field
                    className="w-100 px-4 py-2"
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                  <div className="errMessage w-100 text-left  mt-1 mb-3 text-danger">
                    <ErrorMessage name="name" component={TextError} />
                  </div>
                  <Field
                    className="w-100 px-4 py-2 mb-1"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <div className="errMessage w-100 text-left  mt-1 mb-3 text-danger">
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <Field
                    className="w-100 px-4 py-2 mb-1"
                    type="text"
                    name="password"
                    placeholder="Password"
                  />
                  <div className="errMessage w-100 text-left mt-1 mb-3 text-danger">
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                  <Field
                    className="w-100 px-4 py-2 mb-1"
                    type="text"
                    name="ConfirmPassword"
                    placeholder="Confirm Password"
                  />
                  <div className="errMessage w-100 text-left mt-1 mb-3 text-danger">
                    <ErrorMessage
                      name="ConfirmPassword"
                      component={TextError}
                    />
                  </div>
                  <Field
                    className="w-100 px-4 py-2"
                    type="text"
                    name="age"
                    placeholder="age"
                  >
                  </Field>
                  <div className="errMessage w-100 text-left  mt-1 mb-3 text-danger">
                    <ErrorMessage name="age" component={TextError} />
                  </div>
                  <div className="w-100 d-flex justify-content-between aligin-items-center">
                    <p className=" m-0 p-0">
                      {" "}
                      Have Account?{" "}
                      <NavLink className="color " to="/userlogin">
                        Login Now
                      </NavLink>
                    </p>
                    <button
                      className="bg-color button text-white px-4 py-2"
                      type="submit"
                    >
                      {!loading ? "Loading" : 'Register'}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      {/* <FormikContainer /> */}
    </>
  );
};

export default UserRegister;
