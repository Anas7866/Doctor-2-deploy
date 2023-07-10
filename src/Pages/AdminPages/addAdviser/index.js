import React, { useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import InputField from "../../../Shared/InputField";
import "./Dashboard.scss";
import SelectField from "../../../Shared/SelectField/SelectField";
import Button from "../../../Shared/Button/Button";
import {
  updateAdviser,
  addAdviserCall,
  getAllDropdownValueAdviser,
  getSingleAdviser,
} from "../../../Store/Adviser/actions";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddAdviserPage() {
  const dispatch = useDispatch();
  const user = useParams();
  let history = useHistory();

  const adviserDropdownValues = useSelector(
    (state) => state.Adviser?.adviserDropdown
  );
  const adviser = useSelector((state) => state.Adviser?.singleAdviser);
  const [badgesState, setBadgesState] = useState("");
  const [expertiseState, setExpertiseState] = useState("");
  const [preferedDealSizeState, setPreferedDealSizeState] = useState("");
  const [yesterdayDay, setYesterdayDay] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllDropdownValueAdviser());
    if (user.id) {
      dispatch(getSingleAdviser(user.id));
    }
  }, []);

  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
    name: Yup.string().required("Please enter name"),
    badges: Yup.mixed().required("Please enter badges"),
    intro: Yup.string().required("Please enter intro"),
    location: Yup.string().required("Please enter location"),
    responseRate: Yup.string().required("Please enter response rate"),
    responseTime: Yup.string().required("Please enter response time"),
    dealsAquired: Yup.string().required("Please enter deals aquired"),
    preferedDealSize: Yup.mixed().required("Please enter prefered deal size"),
    onNamiSince: Yup.string().required("Please enter onNamiSince"),
    dealsClosed: Yup.string().required("Please enter deals closed"),
    expertise: Yup.mixed().required("Please enter expertise"),
    shortBio: Yup.string().required("Please enter short bio"),
    linkedIn: Yup.string()
      .matches(
        /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,
        "Invalid Pattern"
      )
      .required("Please enter linkedIn"),
    website: Yup.string()
      .matches(
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
        "Invalid Pattern"
      )
      .required("Please enter website"),
    otherExperience: Yup.string().required("Please enter other experience"),
    imageUrl: Yup.string().when("user.id", {
      is: false,
      then: Yup.string().required("Please enter other profile image"),
    }),
  });

  const formik = useFormik({
    initialValues: adviser,
    enableReinitialize: true,
    validationSchema: loginUserSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      if (user.id) {
        formData.append("advisorId", user.id);
      }
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
      formData.append("preferedDealSize", values.preferedDealSize.value);
      formData.append("badges", values.badges.value);
      formData.append(
        "expertise",
        values.expertise?.map((obj) => obj.value)
      );
      formData.append("imageUrl", values.imageUrl);
      if (user.id) {
        dispatch(updateAdviser({ formData, history, formik, setIsLoading }));
      } else {
        dispatch(addAdviserCall({ formData, history, formik, setIsLoading }));
      }
    },
  });

  console.log("values", formik);

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

  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    setYesterdayDay(previous);
    return previous;
  }
  useEffect(() => {
    getPreviousDay();
  }, []);
  useEffect(() => {
    setExpertiseState(formik.values.expertise);
    setPreferedDealSizeState(formik.values.preferedDealSize);
    setBadgesState(formik.values.badges);
  }, [formik]);

  return (
    <div className="col-sm-12 p-0">
      <HeaderAdmin />
      <Container>
        <div className="col-sm-12">
          <div className="col-sm-12 border_add_advisor   my-3">
            <div className="row">
              <div className="col-sm-6 m-auto pt-2 ">
                <h4>{user.id ? "Edit Advisor" : "Add Advisor"}</h4>
              </div>
              <div className="col-sm-4 "></div>
              <div className="col-md-2 pb-1">
                <Link to="/advisorListing">
                  {" "}
                  <Button
                    size={"sm"}
                    className="button_style_login"
                    variant="outline"
                  >
                    Back
                  </Button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="col-sm-12 border_add_advisor  py-4 my-3">
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <label className="mb-0">Advisor name</label>
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
                    <label className="mb-0">Email</label>
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
                    <label className="mb-0">Introduction</label>
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
                    <label className="mb-0">Location</label>
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
                    <label className="mb-0">Response Rate</label>
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
                    <label className="mb-0">Response Time</label>
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
                    <label className="mb-0">Deals Aquired</label>
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
                    <label className="mb-0">Deals Closed</label>
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
                    <label className="mb-0">Short Bio</label>
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
                    <label className="mb-0">LinkedIn Profile Link</label>
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
                    <label className="mb-0">Website</label>
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
                    <label className="mb-0">Other Experience</label>
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
                    <label className="mb-2">Badges</label>
                    <SelectField
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
                      error={Boolean(
                        formik.touched.badges && formik.errors.badges
                      )}
                      helpertext={formik.errors.badges}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="mb-2">Enter Expertise</label>
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
                    <label className="mb-2">Prefered Deal Size</label>
                    <SelectField
                      placeholder="Prefered deal size"
                      name="preferedDealSize"
                      values={preferedDealSizeState}
                      options={adviserDropdownValues?.prefferedDealSizeList}
                      handleChange={(e) => {
                        setPreferedDealSizeState(e);
                        formik.setFieldValue("preferedDealSize", e);
                      }}
                      error={Boolean(
                        formik.touched.preferedDealSize &&
                          formik.errors.preferedDealSize
                      )}
                      helpertext={formik.errors.preferedDealSize}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="mb-2">Date</label>
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
                    <label className="mb-2">Choose Picture</label>
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
                      isLoading={isLoading}
                      onHandleClick={formik.handleSubmit}
                    >
                      {user.id ? "Edit" : "Add"} Adviser
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
