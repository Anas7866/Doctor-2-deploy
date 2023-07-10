import React, { useState } from "react";
import * as Yup from "yup";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import "./Changepassword.scss";
import {
  changeconfirmPassword,
  changePassword,
} from "../../../Store/Auth/actions";
import { useDispatch } from "react-redux";

function ChangeconfirmPassword() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const changePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().max(255).required("Old password is required"),
    newPassword: Yup.string().max(255).required("confirm password is required"),
    confirmPassword: Yup.string().when("newPassword", {
      is: (val) => !!(val && val.length > 0),
      then: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        "Both confirm password must be match!"
      ),
    }),
  });
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    enableReinitialize: true,
    validationSchema: changePasswordSchema,
    onSubmit: async (values) => {
      await dispatch(
        changePassword({
          currentPassword: values.oldPassword,
          newPassword: values.newPassword,
          resetForm: formik.resetForm,
          history: history,
          setIsLoading,
        })
      );
    },
  });

  return (
    <div className="col-sm-12 p-0">
      <HeaderAdmin />

      <div className="col-sm-12 px-5 py-4">
        <div className="col-sm-12 ">
          <div className="col-sm-12 pt-5">
            <h2 className="pb-4 color_gray">
              <b>Change Password</b>
            </h2>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <FormikProvider value={formik}>
                <Form noValidate onSubmit={formik.handleSubmit}>
                  <div className="col-sm-12 ">
                    <div className="col-sm-12 pl-0">
                      <label className="label_login m-0">Old Password</label>
                      <InputField
                        type="oldPassword"
                        placeholder="Enter old password"
                        name="oldPassword"
                        value={formik.values && formik.values.oldPassword}
                        onHandleChange={formik.handleChange}
                        error={Boolean(
                          formik.touched.oldPassword &&
                            formik.errors.oldPassword
                        )}
                        helpertext={formik.errors.oldPassword}
                      />
                    </div>
                    <div className="col-sm-12 pl-0 pt-4">
                      <label className="label_login m-0">New Password</label>
                      <InputField
                        name="newPassword"
                        placeholder="Enter new password"
                        value={formik.values && formik.values.newPassword}
                        onHandleChange={formik.handleChange}
                        error={Boolean(
                          formik.touched.newPassword &&
                            formik.errors.newPassword
                        )}
                        helpertext={formik.errors.newPassword}
                      />
                    </div>
                    <div className="col-sm-12 pl-0 pt-4">
                      <label className="label_login m-0">
                        Confirm confirmPassword
                      </label>
                      <InputField
                        type="confirmPassword"
                        placeholder="Enter new password"
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
                    <div className="col-sm-12 pl-0 mt-4">
                      <Button
                        size={"sm"}
                        className=" button_style_login"
                        variant="outline"
                        isLoading={isLoading}
                        onHandleClick={formik.handleSubmit}
                      >
                        Change{" "}
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
            <div className="col-sm-6 m-auto text-center">
              <img
                src="../images/shield.gif"
                className="img-fluid  img_width_shield"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeconfirmPassword;
