import React, { useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginUser, show_questions } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "../Login/Login.scss";
import Select from "react-select";
import { question_form_submit } from "../../../Store/Auth/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function QA(props) {
  const dispatch = useDispatch();
  let { id } = useParams();
  let number = parseInt(id);
  console.log("search params", id);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [documentone, setDocumentone] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  let history = useHistory();
  const location = useLocation();
  console.log("pathname", location.pathname);
  const allquestionsArray = useSelector(
    (state) => state.Auth?.showallquestionbyid
  );
  const [questions, setquestions] = useState([]);
  const [answers, setanswers] = useState([]);

  const userallquestion = useSelector((state) => state.Auth?.user);
  useEffect(() => {
    console.log("--------- auth user ---------");
    console.log(userallquestion.email);
    console.log("--------- auth user ---------");
    dispatch(show_questions(number));
  }, []);

  useEffect(() => {
    setquestions([...allquestionsArray.questions]);
    if (allquestionsArray) {
      let __answers = allquestionsArray.questions.map((itm) => {
        return { question: itm.id, type: itm.type, answer: "" };
      });
      setanswers([...__answers]);
    }
  }, [allquestionsArray]);

  // combining all the inputed elements and holding it into the state using spread operator ------------------

  const handleChange = (text, id) => {
    let _answers = answers.map((itm) =>
      itm.question === id ? { ...itm, answer: text } : { ...itm }
    );
    setanswers([..._answers]);
  };

  // combined elements are dispaticing into saga ----------------
  const handleSubmit = (e) => {
    console.log("------------ answers ---------------");
    let _form = {
      form: Number(id),
      email: userallquestion.email,
      answers: [...answers],
      setIsLoading,
    };
    console.log("---bnew--------- answers ---------------", _form);
    dispatch(question_form_submit(_form));
  };

  // file upload -----------------------------------------
  // const handlFileChange = (e, _id) => {
  //   alert("i came in");

  //   console.log(e.target.files, _id);
  //   const fd = new FormData();
  //   fd.append("file", e.target.files[0]);
  //   setIisLoadingImages(!isLoadingImages);
  //   console.log("isloading before api hit", isLoadingImages);
  //   const requestOptions = {
  //     method: "POST",
  //     body: fd,
  //   };

  //   fetch(
  //     "https://nodejs-dev.findanexpert.net/api/media/upload",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setIisLoadingImages(false);
  //       console.log("---- result ------");
  //       console.log(result.data, _id);
  //       console.log("---- result ------");
  //       let _answers = answers.map((itm) =>
  //         itm.question == _id ? { ...itm, answer: result.data.url } : { ...itm }
  //       );
  //       setanswers([..._answers]);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  // const handlFileChange = async (e, _id) => {
  //   try {
  //     alert("i came in");

  //     console.log(e.target.files, _id);
  //     const fd = new FormData();
  //     fd.append("file", e.target.files[0]);
  //     setIsLoadingImages(true);
  //     console.log("isloading before api hit", isLoadingImages);
  //     const requestOptions = {
  //       method: "POST",
  //       body: fd,
  //     };

  //     const response = await fetch(
  //       "https://nodejs-dev.findanexpert.net/api/media/upload",
  //       requestOptions
  //     );
  //     const result = await response.json();

  //     console.log("---- result ------");
  //     console.log(result.data, _id);
  //     console.log("---- result ------");
  //     setDocumentone(result.data.url);
  //     let _answers = answers.map((itm) =>
  //       itm.question === _id ? { ...itm, answer: result.data.url } : { ...itm }
  //     );
  //     setanswers([..._answers]);
  //     toast("Document 1 uploaded");
  //   } catch (error) {
  //     console.log("error", error);
  //   } finally {
  //     setIsLoadingImages(false);
  //   }
  // };

  const handlFileChange = async (e, _id) => {
    try {
      console.log(e.target.files, _id);
      const fd = new FormData();
      fd.append("file", e.target.files[0]);
      setIsLoadingImages(true);
      console.log("isloading before api hit", isLoadingImages);
      const requestOptions = {
        method: "POST",
        body: fd,
      };

      const response = await fetch(
        "https://nodejs-dev.findanexpert.net/api/media/upload",
        requestOptions
      );
      const result = await response.json();

      console.log("---- result ------");
      console.log(result.data, _id);
      console.log("---- result ------");

      // Concatenate the new response with the previous response using the spread operator
      setApiResponse((prevResponse) => prevResponse + result.data.url + " ");

      let _answers = answers.map((itm) =>
        itm.question === _id ? { ...itm, answer: result.data.url } : { ...itm }
      );
      setanswers([..._answers]);
      toast.success("Document uploaded");
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoadingImages(false);
    }
  };

  console.log("newwwwwwwwwwwwwwwwwwww", documentone);
  return (
    <>
      {questions ? (
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

                  <div
                    className="col-md-8 height_of_questions_section"
                    id="style-7"
                  >
                    <div className="col-md-12 px-0 pt-3">
                      <h1>
                        <b className="name_Qa">
                          Hello! {userallquestion?.name}
                        </b>
                      </h1>
                      <h6 className="py-3 subname_qa">
                        {allquestionsArray?.title}
                      </h6>
                      {/* <p>{JSON.stringify(questions)}</p> */}
                    </div>
                    {questions.map((question, index) => (
                      <>
                        <div className="col-md-12  px-0">
                          <h6 className=" mt-4">
                            <b>{question.question}</b>
                          </h6>
                          {question.type === "EditText" && (
                            <input
                              id={question.id}
                              onChange={(e) =>
                                handleChange(e.target.value, question.id)
                              }
                              type="text"
                              className="form-control form-control-lg input_style_login w-100"
                              placeholder={`Enter ${question.question}`}
                              aria-label=""
                              aria-describedby="basic-addon1"
                            />
                          )}
                          {question.type === "MCQ" && (
                            <Select
                              onChange={(e) =>
                                handleChange(e.value, question.id)
                              }
                              placeholder={`${question.question}`}
                              options={question.options.map((itm) => {
                                return { label: itm.option, value: itm.option };
                              })}
                            />
                          )}
                          {question.type === "Document" && (
                            <>
                              {isLoadingImages ? (
                                <>
                                  {console.log(
                                    "------------------------",
                                    isLoadingImages
                                  )}
                                  <>Loading</>
                                </>
                              ) : (
                                <>
                                  {console.log(
                                    "------------------------",
                                    isLoadingImages
                                  )}
                                  <input
                                    onChange={(e) =>
                                      handlFileChange(e, question.id)
                                    }
                                    className="form-control w-100 newform_upload_qa"
                                    type="file"
                                  />
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </>
                    ))}
                    {apiResponse === "" ? null : (
                      <div className="col-md-12 backgroud_card">
                        <h6>Your Uploaded Documents are below:</h6>
                        {apiResponse === "" ? null : <> {apiResponse}</>}
                      </div>
                    )}

                    <div className="col-md-12 px-0">
                      <div className="form-group">
                        <button
                          className="btn btn-primary custom_submit_qa_button"
                          onClick={(e) => handleSubmit(e)}
                        >
                          {isLoading ? (
                            <div
                              class="spinner-border text-light"
                              role="status"
                            >
                              <span class="sr-only">Loading...</span>
                            </div>
                          ) : (
                            <span>Submit</span>
                          )}
                        </button>
                      </div>
                    </div>
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
                    Create new Account on Second Opinion app. We will provide
                    you assistance in all health related problems
                  </h6>
                </div>
              </div>
              <div className="col-md-12 pt-3">
                <img className="img-fluid" src="../images/qa.png" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
}
