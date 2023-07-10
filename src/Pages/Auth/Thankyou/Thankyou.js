import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "./../Login/Login.scss";

export default function Thankyou(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [tabswitch, setTabswitch] = useState(true);

  return (
    <div className="col-sm-12 background_color_login_signup">
      <div className="col-sm-12">
        <Headerauth />
      </div>
      <div className="row">
        <div className="col-md-12 pt-5 mt-5 text-center display_sidepannel_none">
          <h1 className="pt-5">
            <b>Thank you!</b>
          </h1>
          <h6 className="color_gray_new">
            Your have successfully made Second Opinion with us.
          </h6>
          <div className="col-md-12 pt-3">
            <img
              className="img-fluid width_giff"
              src="../images/verifiedd.gif"
            />
          </div>
          <div className="col-md-12">
            {/* createpassword */}
            <Link to="/login" className="link_style_noneactive">
              <button className="btn btn-info background_color_blue">
                {" "}
                Continue{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* code to use later  */}
      {/* <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="col-sm-12 px-4">
                <h1 className="heading4_login m-0 pt-5 pb-5">
                  <b>Welcome back</b>
                </h1>
              </div>

              <div className="col-sm-12 px-4">
                <label className="label_login m-0">Email</label>
                <InputField
                  placeholder="Samantha_Nader@hotmail.com"
                  name="email"
                  value={formik.values && formik.values.email}
                  onHandleChange={formik.handleChange}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helpertext={formik.errors.email}
                />
                <span className="join_login  ">
                  <span>
                    <img
                      src="../images/bulb.png"
                      className="img-fluid img_bulb_width"
                    />
                  </span>
                  <span className="pt-2">
                    {" "}
                    This should be an email you can access post-acquisition{" "}
                  </span>
                </span>
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
                <span className="join_login">
                  Forgot your password?
                  <span className="join2_login">
                    <Link to="/forget-password" className="link_decoration">
                      {" "}
                      <b>Reset </b>
                    </Link>
                  </span>
                </span>
              </div>
              <div className="col-sm-12 px-4">
                <Button
                  size={"sm"}
                  className=" button_style_login"
                  variant="outline"
                  isLoading={isLoading}
                  onHandleClick={formik.handleSubmit}
                >
                  Log in{" "}
                  <span className="right_arrow_login">
                    {" "}
                    <i className="fas fa-arrow-right"></i>{" "}
                  </span>
                </Button>
              </div>
              <div className="col-sm-12 mobile_padding_bottom px-4 py-2">
                <span className="join_login">
                  Do not have’n account?
                  <span className="join2_login">
                    <Link to="/signup" className="link_decoration">
                      {" "}
                      <b>Sign up</b>
                    </Link>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </Form>
      </FormikProvider> */}
    </div>
  );
}
