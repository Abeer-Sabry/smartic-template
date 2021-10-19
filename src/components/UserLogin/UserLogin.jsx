import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { userLoginAction } from "../../Redux/User/action";
import TextError from "../Forms/TextError";

const UserLogin = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(({ user }) => user);
    const initialValues = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string().email().required("Email Is Required"),
        password: Yup.string().required("Password Is Required"),
    });

    return (
        <div>
            <div className="container section">
                <div className="col-md-8 m-auto text-center">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log("LoginData", values);
                            dispatch(userLoginAction(values));
                        }}
                    >
                        {(formik) => {
                            return (
                                <Form>
                                    <Field
                                        placeholder="email"
                                        name="email"
                                        type="text"
                                        className="w-100 px-4 py-2"
                                    />
                                    <div className="text-danger text-left errMessage mt-1 mb-3">
                                        <ErrorMessage name="email" component={TextError} />
                                    </div>
                                    <Field
                                        placeholder="password"
                                        name="password"
                                        type="text"
                                        className="w-100 px-4 py-2"
                                    />
                                    <div className="text-danger text-left errMessage mt-1 mb-3">
                                        <ErrorMessage name="password" component={TextError} />
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className=" m-0 p-0">
                                            {" "}
                                            Don't Have Account?{" "}
                                            <NavLink className="color " to="/userRegister">
                                                Register Now
                                            </NavLink>
                                        </p>
                                        <button
                                            type="submit"
                                            className="px-3 py-2 button bg-color text-white"
                                        >
                                            {loading ? 'loading' : 'Login'}
                                        </button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
