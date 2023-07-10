import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import "./Resetpassword.scss";
import Headerauth from "../Headerauth/Headerauth";
import InputField from "../../../Shared/InputField";
import Button from "../../../Shared/Button/Button";
import { Link, useHistory } from "react-router-dom";
import { resetPassword } from "../../../Store/Auth/actions";
import { useState } from "react";

function Resetpassword() {
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const UserId = params.get("token");

  const resetPasswordSchema = Yup.object().shape({
    password: Yup.string().max(255).required("Password is required"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => !!(val && val.length > 0),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both Password must be match!"
      ),
    }),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
    },

    enableReinitialize: true,
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      await dispatch(
        resetPassword({
          token: UserId,
          password: values.password,
          resetForm: formik.resetForm,
          history: history,
          setIsLoading,
        })
      );
    },
  });

  return (
    <div className="col-sm-12">
      <Headerauth />
      <div className="col-sm-12 login_height">
        <div className="col-sm-12">
          <Headerauth />
        </div>

        <div className="row">
          <div className="col-sm-3  ">
            <div className="col-sm-12 p-5">
              <Link to="/forget-password" className="link_decoration">
                {" "}
                <button className="btn btn-light btn-lg rounded-circle pt-2 pb-2 button_style_forget">
                  <span className="right_arrow_login1 ">
                    <i className="fas fa-arrow-left"></i>
                  </span>
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="col-sm-6  border-scss">
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-sm-1"></div>
                  <div className="col-sm-10">
                    <div className="col-sm-12 px-4 text-center pt-5">
                      <h1 className="heading4_login m-0">Reset Password</h1>
                    </div>

                    <div className="col-sm-12 px-4 pt-4">
                      <label className="label_login m-0">Password</label>
                      <InputField
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formik.values && formik.values.password}
                        onHandleChange={formik.handleChange}
                        error={Boolean(
                          formik.touched.password && formik.errors.password
                        )}
                        helpertext={formik.errors.password}
                      />
                    </div>
                    <div className="col-sm-12 px-4 pt-4">
                      <label className="label_login m-0">
                        Confirm Password
                      </label>
                      <InputField
                        type="password"
                        placeholder="Enter your password"
                        name="confirmPassword"
                        value={formik.values && formik.values.confirmPassword}
                        onHandleChange={formik.handleChange}
                        error={Boolean(
                          formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                        )}
                        helpertext={formik.errors.confirmPassword}
                      />
                    </div>

                    <div className="col-sm-12 px-4 pt-4">
                      <Button
                        size={"sm"}
                        className=" button_style_login"
                        variant="outline"
                        isLoading={isLoading}
                        onHandleClick={formik.handleSubmit}
                      >
                        Reset{" "}
                        <span className="right_arrow_login">
                          {" "}
                          <i className="fas fa-arrow-right"></i>{" "}
                        </span>
                      </Button>
                    </div>
                    <div className="col-sm-12 mobile_padding_bottom_forget px-4 py-2 text-center">
                      <span className="join_login">
                        Already know password?
                        <span className="join2_login">
                          <Link to="/signup" className="link_decoration">
                            {" "}
                            <b> Login </b>
                          </Link>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-1"></div>
                </div>
              </Form>
            </FormikProvider>
          </div>
          <div className="col-sm-3  ">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10"></div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
