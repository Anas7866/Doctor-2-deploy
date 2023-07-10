import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { forgotPassword } from "../../../Store/Auth/actions";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import { Link, useHistory } from "react-router-dom";
import Headerauth from "../Headerauth/Headerauth";
import { useState } from "react";

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,
    onSubmit: async (values) => {
      await dispatch(
        forgotPassword({
          email: values.email,
          resetForm: formik.resetForm,
          history: history,
          setIsLoading
        })
      );
    },
  });
  return (
    <div className="col-sm-12 login_height">
      <div className="col-sm-12">
        <Headerauth />
      </div>

      <div className="row">
        <div className="col-sm-3">
          <div className="col-sm-12 p-5">
            <Link to="/login" className="link_decoration">
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
                    <h1 className="heading4_login m-0">
                      Forgot your password?
                    </h1>
                  </div>

                  <div className="col-sm-12 px-4 pt-4">
                    <label className="label_login m-0">Email</label>
                    <InputField
                      type="text"
                      placeholder="Samantha_Nader@hotmail.com"
                      name="email"
                      value={formik.values && formik.values.email}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.email && formik.errors.email
                      )}
                      helpertext={formik.errors.email}
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
                      Request password reset{" "}
                      <span className="right_arrow_login">
                        {" "}
                        <i className="fas fa-arrow-right"></i>{" "}
                      </span>
                    </Button>
                  </div>
                  <div className="col-sm-12 mobile_padding_bottom_forget px-4 py-2 text-center">
                    <span className="join_login">
                      Don't have an account?
                      <span className="join2_login">
                        <Link to="/signup" className="link_decoration">
                          {" "}
                          <b> Sign up </b>
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
  );
}
