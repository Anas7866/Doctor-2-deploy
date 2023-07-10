import React, { useEffect } from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getprofile } from "../../../Store/Auth/actions";
import { useState } from "react";

function Profile() {
  let history = useHistory();
  const dispatch = useDispatch();
  // const [getalladmindetails, setgetalladmindetails] = useState("");
  useEffect(() => {
    dispatch(getprofile());
    // setgetalladmindetails(getalladmindetails);
  }, []);
  const getalladmindetails = useSelector(
    (state) => state.Auth?.profilesuccessadmin?.profile
  );

  const details  = useSelector(
    (state) => state.Auth?.profilesuccessadmin?.details
  );
  console.log("getalladmindetails", details);
  return (
    <div className="col-md-12 mt-4" style={{ height: "80vh" }}>
      {getalladmindetails ?
       <div className="row">
       <div className="col-md-6 pl-md-4">
         <div className="col-md-12  background_card_one p-3">
           <div className="row pb-3">
             <div className="col-md-6 pt-2">
               <div className="row">
                 <div className="col-md-3 ">
                   <img
                     className="img-fluid height_of_image"
                     src="../images/profile.png"
                   />
                 </div>
                 <div className="col-md-9  px-1 m-auto">
                   <div className="col-md-12 px-0">
                     <p className="mb-0">{getalladmindetails?.user?.name}</p>
                     <p className="mb-0 text_gray">Cardiologist</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-md-6 text-right">
               <div className="col-md-12">
                 <i class="fas fa-edit"></i>
               </div>
               <div className="col-md-12">
                 <button className="btn btn-outline-info btn-sm button_avaliable">
                   {" "}
                   Avaliable{" "}
                 </button>
               </div>
             </div>
           </div>
           <hr />
           <div className="row ">
             <div className="col-md-6 ">
               <p className="mb-0 color_left">Email</p>
             </div>
             <div className="col-md-6 text-right">
               <p className="mb-0 color_right">{getalladmindetails?.user?.email}</p>
             </div>
           </div>
           <hr />
           <div className="row ">
             <div className="col-md-6 ">
               <p className="mb-0 color_left">Mobile</p>
             </div>
             <div className="col-md-6 text-right">
               <p className="mb-0 color_right">+44 7894085</p>
             </div>
           </div>
           <hr />
           <div className="row pb-3">
             <div className="col-md-6 ">
               <p className="mb-0 color_left">Clinic Name</p>
             </div>
             <div className="col-md-6 text-right">
               <p className="mb-0 color_right">London Clinic</p>
             </div>
           </div>
         </div>
       </div>
       <div className="col-md-6 pr-md-4">
         <div className="col-md-12  background_card_one1 p-3">
           <div className="row pb-3">
             <div className="col-md-6 pt-2">
               <div className="col-md-12 px-0">
                 <p className="mb-0">Details</p>
               </div>
             </div>
             <div className="col-md-6 text-right">
               <div className="col-md-12 px-0">
                 <i class="fas fa-edit"></i>
               </div>
             </div>
           </div>
           <hr />
           {details?.map((item,index)  => {
            return(
              <>
              <div className="row ">
              <div className="col-md-6 ">
                <p className="mb-0 color_left">{item?.question}</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="mb-0 color_right">{item?.answer}</p>
              </div>
            </div>
            <hr />
            </>
            );
           })}
         
           
         </div>
       </div>
     </div>
      : <>loading</>}
     
    </div>
  );
}

export default Profile;
