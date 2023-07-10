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

export default function Uploaddoc(props) {
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

              <div className="col-md-8">
                <div className="col-md-12 px-0 pt-3">
                  <h1>
                    <b className="name_Qa">Hello! Zeeshan</b>
                  </h1>
                  <h6 className="py-3 subname_qa">
                    Please Answer Following Question.
                  </h6>
                </div>
                <form className="row">
                  <div className="col-md-12">
                    <h6 className="pb-2">
                      <b>What is the name of your Medical institute?</b>
                    </h6>
                    <input
                      type="text"
                      className="form-control form-control-lg input_style_login w-100"
                      placeholder="Enter your institute name"
                      aria-label=""
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col-md-12 pt-3">
                    <h6 className="pb-2">
                      <b>Upload educational documents.</b>
                    </h6>
                    <div className="row">
                      <div className="col-md-3">
                        <div class="upload-btn-wrapper">
                          <button class="btnv">
                            <img
                              className="img-fluid"
                              src="../images/upload.png"
                            />
                            <h6 className="button_description">
                              Upload&nbsp;PDF
                            </h6>
                          </button>
                          <input type="file" name="myfile" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="col-md-12">
                          <div class="upload-btn-wrapper">
                            <button class="btnvv">
                              <img
                                className="img-fluid"
                                src="../images/upload.png"
                              />
                              <h6 className="button_description">
                                Upload&nbsp;
                              </h6>
                            </button>
                            <input type="file" name="myfile" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 pt-3">
                    <h6 className="pb-2">
                      <b>Upload your license.</b>
                    </h6>
                    <div className="row">
                      <div className="col-md-3">
                        <div class="upload-btn-wrapper">
                          <button class="btnvv">
                            <img
                              className="img-fluid"
                              src="../images/upload.png"
                            />
                            <h6 className="button_description">Upload</h6>
                          </button>
                          <input type="file" name="myfile" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <button className="btn btn-info w-100 button_style_padding1">
                          Previous
                        </button>
                      </div>
                      <div className="col-md-6">
                        <Link to="/thankyou" className="link_style_noneactive">
                          <button className="btn btn-info w-100 button_style_padding">
                            Next
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 display_sidepannel_none">
          <h1 className="pt-5">
            <b>Register as a Doctor</b>
          </h1>
          <div className="row">
            <div className="col-md-8">
              <h6>
                Create new Account on Second Opinion app. We will provide you
                assistance in all health related problems
              </h6>
            </div>
          </div>
          <div className="col-md-12 pt-3">
            <img className="img-fluid" src="../images/qa.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
