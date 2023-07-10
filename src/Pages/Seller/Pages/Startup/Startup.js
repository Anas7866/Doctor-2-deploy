import React, { useState } from 'react'
import HeaderSeller from '../HeaderSeller/HeaderSeller'
import FooterSeller from "../FooterSeller/FooterSeller"
import "./startup.scss"
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputField from "../../../../Shared/InputField";
import Button from "../../../../Shared/Button/Button";

function Startup() {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
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
        // await dispatch(
        //   loginUser({
        //     email: values.email,
        //     password: values.password,
        //     resetForm: formik.resetForm,
        //     history: history,
        //     setIsLoading
            
        //   })
        // );
      },
    });
  return (
    <div className='col-sm-12 p-0 height_page'>
      <HeaderSeller />
      <div className='col-sm-12'>
        <div className='row'>
            <div className='col-sm-6'>
            <div className="col-sm-12 login_height">
     
     
       
        <div className="col-sm-12  border-scss">
          <FormikProvider value={formik}>
            <Form noValidate onSubmit={formik.handleSubmit}>
              
                <div className="col-sm-12">
                  <div className="col-sm-12 px-4">
                    <h3 className="heading4_login m-0 pt-5"><b>Tell us about your startup</b></h3>
                    <p className='styletext  pb-3 pt-1'><b>We sent a verification link to the email address you used to sign up.</b></p>
                  </div>
                
                  <div className="col-sm-12 px-4">
                    <label className="label_login m-0">Startup name</label>
                    <InputField
                      placeholder="ex. Piied Piper LLC"
                      name="text"
                      value={formik.values && formik.values.email}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.email && formik.errors.email
                      )}
                      helpertext={formik.errors.email}
                    />
                   
                  </div>
                  <div className="col-sm-12 px-4 pt-4">
                    <label className="label_login m-0">Website</label>
                    <InputField
                      type="text"
                      placeholder="ex. pipedpiper.ai"
                      name="text"
                      value={formik.values && formik.values.password}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.password && formik.errors.password
                      )}
                      helpertext={formik.errors.password}
                    />
                   
                  </div>
                  <div className="col-sm-12 px-4 pt-4">
                    <Button
                      size={"sm"}
                      className=" button_style_startup"
                      variant="outline"
                      isLoading={isLoading}
                      onHandleClick={formik.handleSubmit}
                      onClick={() =>
                        history.push(`/listing`)
                      }
                    >
                     Create Startup{" "}
                      <span className="right_arrow_login">
                        {" "}
                        <i className="fas fa-arrow-right"></i>{" "}
                      </span>
                    </Button>
                  </div>
                
                </div>
               
              
            </Form>
          </FormikProvider>
        </div>
       
    
    </div>
            </div>
            <div className='col-sm-6 text-center m-auto'>
                <img className='img-fluid' src='../images/start.gif' />
            </div>
        </div>
      </div>
      <FooterSeller />
      </div>
  )
}

export default Startup