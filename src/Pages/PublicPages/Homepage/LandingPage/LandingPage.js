import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.scss";
import Navigationbarpublic from "../Navigationbarpublic/Navigationbarpublic";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import {
  Link as scrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";

function LandingPage() {
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);

  const scrollToSection = (section = "section1") => {
    console.log(section);
    if (section === "section1") {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    if (section === "section2") {
      sectionRef2.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    // scroll.scrollTo(500); // Scrolls to a specific position (e.g., 500 pixels down)
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 2000,
    });
  }, []);
  return (
    <div className="col-sm-12 p-0 background_main">
      <Navigationbarpublic
        onSectionClick={(e) => scrollToSection(e)}
        scrollToSection={scrollToSection}
      />
      <div className="col-md-12 background_color_header_public pb-5 mb-5 ">
        <div className="col-md-12 custome_main_setting_for_every_page">
          <div className="row">
            <div
              className="col-md-4 padding_adjustments_landingpage m-auto"
              data-aos="fade-right"
            >
              <h1>Take care of your family's health</h1>
              <img className="img-fluid img_line" src="../images/line.png" />
              <h6 className="color_sub_heading11 " data-aos="fade-right">
                Make Promises Easily and Quickly. The Best Doctor Booking
                Service All Over The World.
              </h6>
              <div className="col-md-12 px-0 pt-4 pb-5">
                <div className="row">
                  <div className="col-md-6  col-6" data-aos="fade-right">
                    <img className="img-fluid" src="../images/google.png" />
                  </div>
                  <div className="col-md-6 col-6" data-aos="fade-right">
                    <img className="img-fluid" src="../images/apple.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 text-center margin_auto_col8">
              <img
                className="img-fluid"
                src="../images/people.png"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-11 background_section_2 custome_main_setting_for_every_page">
        <div className="row">
          <div className="col-md-11 ">
            <div ref={sectionRef2} className="col-md-12 padding_top_mobile">
              <div className="row">
                <div className="col-md-12 text-center pt-5 m-auto">
                  <h1>How We Work</h1>
                  <img
                    className="img-fluid img_line1"
                    src="../images/line.png"
                  />
                  <h6 className="color_text_sub_heading_sec_2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </h6>
                </div>
              </div>
              <div className="col-md-12 pt-5 text-center pb-5">
                <div className="row">
                  <div
                    className="col-md-3 col-6 padding_for_every_step"
                    data-aos="fade-down"
                  >
                    <button className="btn btn-info rounded-circle btn_style_icons_button">
                      <span className="icons_land">
                        <i class="fas fa-clipboard-list"></i>
                      </span>
                    </button>
                    <h6 className="pt-2">
                      <b>Step 1</b>
                    </h6>
                    <h6>Registration Process</h6>
                  </div>
                  <div
                    className="col-md-3 col-6 padding_for_every_step"
                    data-aos="fade-down"
                  >
                    <button className="btn btn-info rounded-circle btn_style_icons_button">
                      <span className="icons_land">
                        {" "}
                        <i class="far fa-thumbs-up"></i>
                      </span>
                    </button>
                    <h6 className="pt-2">
                      <b>Step 2</b>
                    </h6>
                    <h6>Complete KYC Requirements</h6>
                  </div>
                  <div
                    className="col-md-3 col-6 padding_for_every_step"
                    data-aos="fade-down"
                  >
                    <button className="btn btn-info rounded-circle btn_style_icons_button">
                      <span className="icons_land">
                        {" "}
                        <i class="fas fa-home"></i>
                      </span>
                    </button>
                    <h6 className="pt-2">
                      <b>Step 3</b>
                    </h6>
                    <h6>Access and Complete Assessments</h6>
                  </div>
                  <div
                    className="col-md-3 col-6 padding_for_every_step"
                    data-aos="fade-down"
                  >
                    <button className="btn btn-info rounded-circle btn_style_icons_button">
                      <span className="icons_land">
                        {" "}
                        <i class="fas fa-dollar-sign"></i>
                      </span>
                    </button>
                    <h6 className="pt-2">
                      <b>Step 4</b>
                    </h6>
                    <h6>Payment and Withdrawal Options</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 custome_main_setting_for_every_page">
        <div className="col-md-12 pt-5 pb-5">
          <div className="row">
            <div className="col-md-6 mobile_picture_landing_1">
              <img
                className="img-fluid"
                src="../images/step1.png"
                data-aos="fade-right"
              />
            </div>
            <div
              className="col-md-6 m-auto padding_setting_section2"
              data-aos="fade-left"
            >
              <p className="global_color_text">Step 1</p>
              <h1>Registration Process</h1>
              <img className="img-fluid img_line1" src="../images/line.png" />
              <h6 className="color_sub_heading pt-3">Visit H3LTH.net</h6>
              <h6 className="color_sub_heading ">
                Click on the "Sign Up" button to create your account.
              </h6>
              <h6 className="color_sub_heading ">
                Fill in the required information, including your name, contact
                details
              </h6>
              <h6 className="color_sub_heading ">
                Agree to the terms and conditions of H3LTH.
              </h6>
              <h6 className="color_sub_heading ">
                Note: You don't need to set a password during the initial
                registration process.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 bg-white custome_main_setting_for_every_page">
        <div className="col-md-12 pt-5 pb-5">
          <div className="row">
            <div
              className="col-md-6 m-auto padding_setting_section2"
              data-aos="fade-right"
            >
              <p className="global_color_text">Step 2</p>
              <h1>Complete KYC Requirements</h1>
              <img className="img-fluid img_line1" src="../images/line.png" />
              <h6 className="color_sub_heading pt-3">
                As part of the registration process, H3LTH requires certain KYC
                (know your client) documentation for verification purposes.
              </h6>
              <h6 className="color_sub_heading ">
                Prepare the necessary documents, including ID proof, education
                proof, employment proof, references, and your LinkedIn ID.
              </h6>
              <h6 className="color_sub_heading ">
                Upload these documents securely through the website.
              </h6>
              <h6 className="color_sub_heading ">
                Our team will review and verify the provided information,
                ensuring a trusted community of doctors.
              </h6>
              <h6 className="color_sub_heading ">
                Once your KYC verification is completed, H3LTH team will send
                you a one-time link to the email address provided during
                registration.
              </h6>
            </div>
            <div className="col-md-6 text-right mobile_picture_landing_1">
              <img
                className="img-fluid"
                src="../images/step2.png"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 custome_main_setting_for_every_page">
        <div className="col-md-12 pt-5 pb-5">
          <div className="row">
            <div
              className="col-md-6 mobile_picture_landing_1"
              data-aos="fade-right"
            >
              <img className="img-fluid" src="../images/step3.png" />
            </div>
            <div
              className="col-md-6 m-auto padding_setting_section2"
              data-aos="fade-left"
            >
              <p className="global_color_text">Step 3</p>
              <h1>Access and Complete Assessments</h1>
              <img className="img-fluid img_line1" src="../images/line.png" />
              <h6 className="color_sub_heading pt-3">
                After setting up your password, you can log in to the H3LTH
                platform using your registered email and the newly created
                password.
              </h6>
              <h6 className="color_sub_heading ">
                Explore the available assessments on the platform. Each
                assessment may have specific requirements, timeframes, and
                compensation details.
              </h6>
              <h6 className="color_sub_heading ">
                Provide your professional insights and opinions based on the
                given assessment instructions.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 bg-white custome_main_setting_for_every_page">
        <div className="col-md-12 pt-5 pb-5">
          <div className="row">
            <div
              className="col-md-6 m-auto padding_setting_section2"
              data-aos="fade-right"
            >
              <p className="global_color_text">Step 4</p>
              <h1>Payment and Withdrawal Options</h1>
              <img className="img-fluid img_line1" src="../images/line.png" />
              <h6 className="color_sub_heading pt-3">
                After successfully completing an assignment, your payment will
                be credited to your profile.
              </h6>
              <h6 className="color_sub_heading ">
                You have the flexibility to withdraw your earnings at any time
                to the bank account of your choice.
              </h6>
              <h6 className="color_sub_heading ">
                Simply navigate to your profile settings, select the withdrawal
                option, and follow the instructions provided.
              </h6>
              <h6 className="color_sub_heading ">
                Additionally, if you prefer to save your earnings in dollars,
                you can choose to keep the funds in your profile for future use.
              </h6>
            </div>
            <div
              className="col-md-6 text-right mobile_picture_landing_1"
              data-aos="fade-left"
            >
              <img className="img-fluid" src="../images/step4.png" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sectionRef}
        className="col-md-12 background_color_header_public py-5 text-center"
      >
        <div
          className="container custome_main_setting_for_every_page bg-white color_last_section"
          data-aos="zoom-in"
        >
          <h1>About us</h1>
          <div className="col-md-12 py-2">
            <img
              className="img-fluid logo_width_last_sec"
              src="../images/logo.png"
            />
          </div>
          <div className="col-md-12">
            <h6 className="color_sub_heading pt-3">
              H3LTH is a dynamic startup on a mission to bridge the gap between
              experts and patients, making healthcare accessible and convenient,
              regardless of geographical boundaries. Our journey began with
              personal experiences of limited information and misdiagnosis,
              fueling our determination to provide a better solution for
              individuals seeking reliable medical guidance.
            </h6>
            <h6 className="color_sub_heading ">
              At H3LTH, we understand the frustration and anxiety that comes
              with not fully understanding your medical condition. That's why
              our primary aim is to bring you peace of mind. We are here to
              empower you with comprehensive medical insights and ensure that
              you receive the accurate information you deserve.
            </h6>
            <h6 className="color_sub_heading ">
              We are committed to ensuring that your health concerns are
              addressed promptly and efficiently. Our team of experienced
              professionals works tirelessly to ensure that each interaction
              with our platform is seamless and informative. At H3LTH, we
              believe in the power of knowledge and the importance of making
              informed decisions about your health. Join us on this journey as
              we work towards bringing you the peace of mind you deserve,
              bridging the gap between patients and experts, and revolutionizing
              the way medical opinions are sought and delivered.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
