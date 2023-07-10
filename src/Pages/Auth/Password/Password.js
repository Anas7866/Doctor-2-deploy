import React, { useState } from 'react'
import { Form, FormikProvider, useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { loginUser } from '../../../Store/Auth/actions'
import Button from '../../../Shared/Button/Button'
import InputField from '../../../Shared/InputField'
import Headerauth from '../Headerauth/Headerauth'
import '../Login/Login.scss'

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [tabswitch, setTabswitch] = useState(true)
  const dispatch = useDispatch()
  const handleclick = () => {
    setTabswitch(!tabswitch)
  }
  let history = useHistory()
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Please enter email address'),
    password: Yup.string().required('Please enter password'),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
        }),
      )
    },
  })
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

              <>
                <div className="col-md-8">
                  <div className="col-md-12 px-0 pt-3">
                    <h1>
                      <b className="name_Qa">Password</b>
                    </h1>
                    <h6 className="py-3 subname_qa">
                      Create password for your new account.
                    </h6>
                  </div>
                  <div className="col-md-12">
                    <form className="row">
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
                          type="text"
                          className="form-control input_style_login"
                          placeholder="Enter your Password"
                          aria-label=""
                          aria-describedby="basic-addon1"
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
                          type="text"
                          className="form-control input_style_login"
                          placeholder="Confirm password"
                          aria-label=""
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-12 px-0 pt-3 pb-2">
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
                                Agree with Terms And Conditions
                              </label>
                            </div>
                          </div>
                        </div>
                        <Link to="/login" className="link_style_noneactive">
                          <div className="row pt-2">
                            <button className="btn btn-info w-100 button_style_padding">
                              Continue
                            </button>
                          </div>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </>

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 display_sidepannel_none">
          <h1 className="pt-5">
            <b>Setup Password</b>
          </h1>
          <div className="row">
            <div className="col-md-6">
              <h6>
                Create password for your new account. We will provide you
                assistance in all health related problems
              </h6>
            </div>
          </div>
          <div className="col-md-12 pt-3">
            <img className="img-fluid" src="../images/pass.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
