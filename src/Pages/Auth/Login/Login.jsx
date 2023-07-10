import React, { useState } from "react";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "./Login.scss";
import Signupform from "./signup";

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [tabswitch, setTabswitch] = useState(true);
  const dispatch = useDispatch();
  const handleclick = () => {
    setTabswitch(!tabswitch);
  };
  let history = useHistory();

  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,

    onSubmit: async (values) => {
      await dispatch(
        loginUser({
          email: values.email,
          password: values.password,
          resetForm: formik.resetForm,
          history: history,
          setIsLoading,
        })
      );
    },
  });
  return (
    <div className="col-sm-12 background_color_login_signup">
      <div className="col-sm-12">
        <Headerauth />
      </div>
      <div className="row">
        <div className="col-md-6 m-auto">
          {/* tab one  */}
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2"></div>
              {tabswitch ? (
                <>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 col-6  text-center border_bottom_active">
                        <h2>
                          <b>Log In</b>
                        </h2>
                      </div>
                      <div
                        className="col-md-6 col-6 text-center"
                        onClick={handleclick}
                      >
                        <h2 className="color_unactive">
                          <b>Sign up</b>
                        </h2>
                      </div>
                    </div>
                    <FormikProvider value={formik}>
                      <Form
                        noValidate
                        onSubmit={formik.handleSubmit}
                        autoComplete="off"
                      >
                        <div className="row">
                          <div className="input-group input-group-lg pt-5 w-100">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light button_style"
                                type="button"
                              >
                                <img
                                  className="img-fluid icon_width"
                                  src="../images/msg.png"
                                />
                              </button>
                            </div>
                            <input
                              autocomplete="off"
                              type="email"
                              required
                              className="form-control input_style_login"
                              placeholder="Enter your Email"
                              id="email"
                              name="email"
                              value={formik.values && formik.values.email}
                              onChange={formik.handleChange}
                              error={Boolean(
                                formik.touched.email && formik.errors.email
                              )}
                              helpertext={formik.errors.email}
                            />
                          </div>
                          <div className="input-group input-group-lg pt-4">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light button_style"
                                type="button"
                              >
                                <img
                                  className="img-fluid icon_width"
                                  src="../images/key.png"
                                />
                              </button>
                            </div>
                            <input
                              autocomplete="off"
                              required
                              type="password"
                              className="form-control input_style_login"
                              placeholder="Enter your Password"
                              id="password"
                              name="password"
                              value={formik.values && formik.values.password}
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 px-0 pt-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input custom_radio"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 pt-3 px-0 text-right">
                            <h6 className="text_color_forget">
                              Forget Password
                            </h6>
                          </div>
                        </div>
                        <div className="row pt-2">
                          <button
                            type="submit"
                            className="btn btn-info w-100 button_style_padding"
                            isLoading={isLoading}
                            onHandleClick={formik.handleSubmit}
                          >
                            {isLoading ? (
                              <div
                                class="spinner-border text-light"
                                role="status"
                              >
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                              <span>Login</span>
                            )}
                          </button>
                        </div>
                      </Form>
                    </FormikProvider>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-8">
                    <div className="row">
                      <div
                        className="col-md-6  col-6 text-center "
                        onClick={handleclick}
                      >
                        <h2 className="color_unactive">
                          <b>Log In</b>
                        </h2>
                      </div>
                      <div className="col-md-6  col-6 text-center border_bottom_active">
                        <h2>
                          <b>Sign up</b>
                        </h2>
                      </div>
                    </div>
                    <Signupform />
                  </div>
                </>
              )}

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 display_sidepannel_none">
          <h1 className="pt-5">
            <b>Welcome!</b>
          </h1>
          <div className="row">
            <div className="col-md-6">
              <h6>
                Welcome to Second Opinion app. We will provide you assistance in
                all health related problems
              </h6>
            </div>
          </div>
          <div className="col-md-12 pt-3">
            <img className="img-fluid" src="../images/people.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
