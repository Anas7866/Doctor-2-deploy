import React, { useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import InputField from "../../../Shared/InputField";
import "./Dashboard.scss";
import SelectField from "../../../Shared/SelectField/SelectField";
import Button from "../../../Shared/Button/Button";
import {
  addAdviserCall,
  getAllDropdownValueAdviser,
} from "../../../Store/Adviser/actions";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddAdviserPage() {
  const dispatch = useDispatch();
  let history = useHistory();

  const adviserDropdownValues = useSelector(
    (state) => state.Adviser?.adviserDropdown
  );

  const [badgesState, setBadgesState] = useState("");
  const [expertiseState, setExpertiseState] = useState("");
  const [preferedDealSizeState, setPreferedDealSizeState] = useState("");
  const [yesterdayDay, setYesterdayDay] = useState();

  useEffect(() => {
    dispatch(getAllDropdownValueAdviser());
  }, []);

  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
    name: Yup.string().required("Please enter name"),
    // badges: Yup.string().required("Please enter badges"),
    intro: Yup.string().required("Please enter intro"),
    location: Yup.string().required("Please enter location"),
    responseRate: Yup.string().required("Please enter response rate"),
    responseTime: Yup.string().required("Please enter response time"),
    dealsAquired: Yup.string().required("Please enter deals aquired"),
    preferedDealSize: Yup.string().required("Please enter prefered deal size"),
    onNamiSince: Yup.string().required("Please enter onNamiSince"),
    dealsClosed: Yup.string().required("Please enter deals closed"),
    // expertise: Yup.string().required("Please enter expertise"),
    shortBio: Yup.string().required("Please enter short bio"),
    linkedIn: Yup.string().required("Please enter linkedIn"),
    website: Yup.string().required("Please enter website"),
    otherExperience: Yup.string().required("Please enter other experience"),
    imageUrl: Yup.string().required("Please enter other profile image"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      badges: [],
      intro: "",
      location: "",
      responseRate: "",
      responseTime: "",
      dealsAquired: "",
      preferedDealSize: "",
      onNamiSince: "",
      dealsClosed: "",
      expertise: [],
      shortBio: "",
      linkedIn: "",
      website: "",
      otherExperience: "",
      imageUrl: "",
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,
    onSubmit: async (values) => {
      console.log(
        "<><><><>>",
        values.expertise?.map((obj) => obj.value),
        values.badges?.map((obj) => obj.value)
      );
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("name", values.name);
      formData.append("intro", values.intro);
      formData.append("location", values.location);
      formData.append("responseRate", values.responseRate);
      formData.append("responseTime", values.responseTime);
      formData.append("dealsAquired", values.dealsAquired);
      formData.append("onNamiSince", values.onNamiSince);
      formData.append("dealsClosed", values.dealsClosed);
      formData.append("shortBio", values.shortBio);
      formData.append("linkedIn", values.linkedIn);
      formData.append("website", values.website);
      formData.append("otherExperience", values.otherExperience);
      formData.append("preferedDealSize", values.preferedDealSize);
      formData.append(
        "expertise",
        values.expertise?.map((obj) => obj.value)
      );
      formData.append(
        "badges",
        values.badges?.map((obj) => obj.value)
      );
      formData.append("imageUrl", values.imageUrl);
      await dispatch(addAdviserCall(formData));
    },
  });

  const badgesArray = [
    {
      value: "Top",
      label: "Top",
    },
    {
      value: "middle",
      label: "middle",
    },
  ];

  console.log("formik", formik);

  useEffect(() => {
    setPreferedDealSizeState(formik?.values?.preferedDealSize);
  }, [formik?.values?.preferedDealSize]);

  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    setYesterdayDay(previous);
    return previous;
  }
  useEffect(() => {
    getPreviousDay();
  }, []);

  return (
    <div className="col-sm-12 p-0">
      <HeaderAdmin />
      <Container>
        <div className="col-sm-12">
          <div className="col-sm-12 border_add_advisor   my-3">
            <div className="row">
              <div className="col-sm-6 m-auto pt-2 ">
                <h4>Add Advisor</h4>
              </div>
              <div className="col-sm-4 "></div>
              <div className="col-md-2 pb-1">
              <Link to="/advisorListing">  <Button
                  size={"sm"}
                  className="button_style_login"
                  variant="outline"
                >
                  Back
                </Button> </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="col-sm-12 border_add_advisor text-center py-4 my-3">
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <InputField
                      placeholder="Enter adviser name"
                      name="name"
                      value={formik.values && formik.values.name}
                      onHandleChange={formik.handleChange}
                      error={Boolean(formik.touched.name && formik.errors.name)}
                      helpertext={formik.errors.name}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
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
                  <div className="col-md-6">
                    <InputField
                      placeholder="Intro"
                      name="intro"
                      value={formik.values && formik.values.intro}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.intro && formik.errors.intro
                      )}
                      helpertext={formik.errors.intro}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="location"
                      name="location"
                      value={formik.values && formik.values.location}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.location && formik.errors.location
                      )}
                      helpertext={formik.errors.location}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="responseRate"
                      name="responseRate"
                      value={formik.values && formik.values.responseRate}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.responseRate &&
                          formik.errors.responseRate
                      )}
                      helpertext={formik.errors.responseRate}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="responseTime"
                      name="responseTime"
                      value={formik.values && formik.values.responseTime}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.responseTime &&
                          formik.errors.responseTime
                      )}
                      helpertext={formik.errors.responseTime}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="dealsAquired"
                      name="dealsAquired"
                      value={formik.values && formik.values.dealsAquired}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.dealsAquired &&
                          formik.errors.dealsAquired
                      )}
                      helpertext={formik.errors.dealsAquired}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="dealsClosed"
                      name="dealsClosed"
                      value={formik.values && formik.values.dealsClosed}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.dealsClosed && formik.errors.dealsClosed
                      )}
                      helpertext={formik.errors.dealsClosed}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="shortBio"
                      name="shortBio"
                      value={formik.values && formik.values.shortBio}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.shortBio && formik.errors.shortBio
                      )}
                      helpertext={formik.errors.shortBio}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="linkedIn"
                      name="linkedIn"
                      value={formik.values && formik.values.linkedIn}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.linkedIn && formik.errors.linkedIn
                      )}
                      helpertext={formik.errors.linkedIn}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="website"
                      name="website"
                      value={formik.values && formik.values.website}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.website && formik.errors.website
                      )}
                      helpertext={formik.errors.website}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      placeholder="otherExperience"
                      name="otherExperience"
                      value={formik.values && formik.values.otherExperience}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.otherExperience &&
                          formik.errors.otherExperience
                      )}
                      helpertext={formik.errors.otherExperience}
                    />
                  </div>
                  <div className="col-md-6">
                    <SelectField
                      isMulti
                      placeholder="Badges"
                      name="badges"
                      className="basic-multi-select select_field_style"
                      classNamePrefix="select"
                      values={badgesState}
                      options={badgesArray}
                      handleChange={(e) => {
                        setBadgesState(e);
                        formik.setFieldValue("badges", e);
                      }}
                      // error={Boolean(
                      //   formik.touched.badges && formik.errors.badges
                      // )}
                      // helpertext={formik.errors.badges}
                    />
                  </div>

                  <div className="col-md-6">
                    <SelectField
                      isMulti
                      placeholder="Enter Expertise"
                      name="expertise"
                      values={expertiseState}
                      options={adviserDropdownValues?.expertiseList}
                      handleChange={(e) => {
                        setExpertiseState(e);
                        formik.setFieldValue("expertise", e);
                      }}
                      error={Boolean(
                        formik.touched.expertise && formik.errors.expertise
                      )}
                      helpertext={formik.errors.expertise}
                    />
                  </div>
                  <div className="col-md-6">
                    <SelectField
                      placeholder="Prefered deal size"
                      name="preferedDealSize"
                      values={preferedDealSizeState}
                      options={adviserDropdownValues?.prefferedDealSizeList}
                      handleChange={(e) => {
                        setPreferedDealSizeState(e);
                        formik.setFieldValue("preferedDealSize", e.label);
                      }}
                      error={Boolean(
                        formik.touched.preferedDealSize &&
                          formik.errors.preferedDealSize
                      )}
                      helpertext={formik.errors.preferedDealSize}
                    />
                  </div>
                  <div className="col-md-6">
                    <DatePicker
                      maxDetail="month"
                      dayPlaceholder="dd"
                      monthPlaceholder="mm"
                      yearPlaceholder="yyyy"
                      yearAriaLabel="Year"
                      className="form-control border_datepicker"
                      format="MM/dd/yyyy"
                      value={formik.values && formik.values.onNamiSince}
                      minDate={new Date("1900-01-01")}
                      maxDate={yesterdayDay}
                      onChange={(date) =>
                        formik.setFieldValue("onNamiSince", date)
                      }
                    />
                    {formik.touched.onNamiSince && formik.errors.onNamiSince ? (
                      <p className="errorMessage">
                        {formik.errors.onNamiSince}
                      </p>
                    ) : null}
                  </div>
                  <div className="col-sm-12 ">
                    <input
                      type="file"
                      className="form-control chose_field"
                      name="imageUrl"
                      onChange={(e) => {
                        formik.setFieldValue(
                          "imageUrl",
                          e.currentTarget.files[0]
                        );
                      }}
                    />
                    {formik.touched.imageUrl && formik.errors.imageUrl ? (
                      <p className="errorMessage">{formik.errors.imageUrl}</p>
                    ) : null}
                  </div>

                  <div className="col-md-6 mt-2">
                    <Button
                      size={"sm"}
                      className="button_style_login"
                      variant="outline"
                      onHandleClick={formik.handleSubmit}
                    >
                      Add Adviser
                    </Button>
                  </div>
                </div>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </Container>
    </div>
  );
}
