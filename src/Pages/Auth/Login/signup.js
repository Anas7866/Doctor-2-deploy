import React from "react";
import "./Login.scss";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { signupuser } from "../../../Store/Auth/actions";
import { useState } from "react";

function Signupform() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };
  let history = useHistory();
  const loginUserSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      //   .email("Please enter valid email address")
      .required("Please enter email address"),
    // password: Yup.string().required("Please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,

    onSubmit: async (values) => {
      await dispatch(
        signupuser({
          name: values.name,
          email: values.email,
          password: "",
          resetForm: formik.resetForm,
          setIsLoading,
        })
      );
    },
  });


  
  const handleClick = () => {
    if (termsAccepted && validateEmail()) {
      // const data = {
      //   name: name,
      //   email: email
      // };

      dispatch(
        signupuser({
          name: name,
          email: email,
          password: "",
          resetForm: formik.resetForm,
          setIsLoading,
        })
      );

    //  console.log(data)
    }else {
      if (!termsAccepted) {
        setTermsError('Please accept the terms and conditions');
      }
    }
  };
  return (
    <div className="col-md-12 px-0">
          <div className="input-group input-group-lg pt-5">
            <div className="input-group-prepend">
              <button className="btn btn-light button_style" type="button">
                <img
                  className="img-fluid icon_width"
                  src="../images/user.png"
                />
              </button>
            </div>
            <input
              type="text"
              className="form-control input_style_login"
              placeholder="Enter your Name"
              aria-label=""
              aria-describedby="basic-addon1"
              id="name"
              name="name"
              value={name}
          onChange={(e) => setName(e.target.value)}
            />
            
          </div>
          <div className="input-group input-group-lg pt-4">
            <div className="input-group-prepend">
              <button className="btn btn-light button_style" type="button">
                <img className="img-fluid icon_width" src="../images/msg.png" />
              </button>
            </div>
            <input
              type="email"
              className="form-control input_style_login"
              placeholder="Enter your Email"
              aria-label=""
              aria-describedby="basic-addon1"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="col-md-12 px-0 pt-2">
            {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
            </div>
          </div>
          {/* <div className="input-group input-group-lg pt-4">
            <div className="input-group-prepend">
              <button className="btn btn-light button_style" type="button">
                <img className="img-fluid icon_width" src="../images/key.png" />
              </button>
            </div>
            <input
              type="password"
              className="form-control input_style_login"
              placeholder="Enter your password"
              aria-label=""
              aria-describedby="basic-addon1"
              id="password"
              name="password"
              value={formik.values && formik.values.password}
              onChange={formik.handleChange}
            />
            <div className="col-md-12 px-0 pt-2">
              {formik.touched.password && formik.errors.password && (
                <div className="error-message">{formik.errors.password}</div>
              )}
            </div>
          </div> */}

          <div className="col-md-12 px-1">
            <div className="col-md-12 px-0 pt-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input custom_radio"
                  id="customCheck1"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Agree with Terms And Conditions
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-12 px-0 pt-2">
          {termsError && <div style={{ color: 'red' }}>{termsError}</div>}
            </div>
          {/* <Link to="/mobile-verification" className="link_style_noneactive"> */}
          <div className="col-md-12 px-1 pt-3">
            <button
              type="submit"
              className="btn btn-info w-100 button_style_padding"
              onClick={handleClick}
            >
              {isLoading ? (
                <div class="spinner-border text-light" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <span>Signup</span>
              )}
            </button>
          </div>
          {/* </Link> */}
    </div>
  );
}

export default Signupform;
