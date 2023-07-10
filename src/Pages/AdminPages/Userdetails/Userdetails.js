import React, { useEffect } from 'react'
import './Userdetail.scss'
import {useParams, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { acceptuserticket, getprofile, ticketacceptance, viewticketdetail } from '../../../Store/Auth/actions';
import Moment from 'react-moment';
import 'moment-timezone';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Userdetails() {
  let { id } = useParams();
  let location = useLocation();
  let accepted = new URLSearchParams(location.search).get('accepted');
  let number = parseInt(id);
  let activee = parseInt(accepted);
  let dispatch = useDispatch();
  let history = useHistory();
  console.log("<><><><><><><><><><><><><><<",number)
  const userviewticket = useSelector((state) => state.Auth?.viewallticketsuser?.request);
  const requestdata = useSelector((state) => state.Auth?.viewallticketsuser?.request_user_submitted_data);
  useEffect(() => {
      dispatch(viewticketdetail({
          id: number,
      }));
}, [])
useEffect(() => {
  dispatch(getprofile());
  // setgetalladmindetails(getalladmindetails);
}, []);
const getalladmindetails = useSelector(
  (state) => state.Auth?.profilesuccessadmin?.profile
);
console.log("????????????????????????",getalladmindetails.id)
const handleAcceptClick = (itemId) => {
  dispatch(
    acceptuserticket({
      id: itemId,
    })
  );
  // console.log("Accept button clicked for item ID:", itemId);
};

const finaloption = () => {
  history.push(`/Add-doctors-opinion/${userviewticket?.id}`)
}

console.log("active,active,active",userviewticket?.id)
  return (
    <div className="col-md-12">
      <div className='row'>
        <div className='col-md-6'>
      <div className="col-md-12 bg-white mt-3 background_color_white_fix_height py-3" id="style-1">
        <h4 className="heading_color">
          <b>User Detail</b>
        </h4>
        <div className="row">
          {/* <div className="col-md-4 text-center">
          {userviewticket?.request?.is_sub_user === false ?
            <img
              className="img-fluid image_width_setting"
              src={`https://backend.h3lth.net${userviewticket?.request?.mainuser?.profileImg}`}
            />:
            <img
              className="img-fluid image_width_setting"
              src={`https://backend.h3lth.net${userviewticket?.request?.user?.profileImg}`}
            />
          }
            <h5 className="pt-2 mb-1">
            {userviewticket?.request?.is_sub_user === false ?
         <>{userviewticket?.request?.mainuser?.user?.name} </> :
         <>{userviewticket?.request?.user?.name} </> 
          }
            </h5>
            <h6 className="color_gray">
            {userviewticket?.request?.is_sub_user === false ?
         <>{userviewticket?.request?.mainuser?.user?.email} </> :
         <>{userviewticket?.request?.mainuser?.user?.email}  </> 
          }
            </h6>
            <button className="btn btn-info mt-3 btn-sm custome_msg_button mb-3">
              Message
            </button>
          </div> */}
          <div className="col-md-6 m-auto">
            <div className="row">
              <div className="col-md-6">
                <h6 className="color_gray">Gender</h6>
              </div>
              <div className="col-md-6">
                <h6>
                {userviewticket?.request?.is_sub_user === false ?
         <>{userviewticket?.request?.mainuser?.gender} </> :
         <>{userviewticket?.request?.user?.gender} </> 
          }
                </h6>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-6">
                <h6 className="color_gray">Form Title</h6>
              </div>
              <div className="col-md-6">
                <h6> {userviewticket?.request?.form?.category?.title}</h6>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-6">
                <h6 className="color_gray">Ticket Id</h6>
              </div>
              <div className="col-md-6">
                <h6> {userviewticket?.request?.form?.id}</h6>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-6">
                <h6 className="color_gray">Category</h6>
              </div>
              <div className="col-md-6">
                <h6>{userviewticket?.request?.form?.title} </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-auto">
            <div className="row">
              <div className="col-md-6">
                <h6 className="color_gray">Date Time</h6>
              </div>
              <div className="col-md-6">
                <h6>
                  <Moment format="YYYY-MM-DD / HH:mm:ss A" >
            {userviewticket?.created_date}
            </Moment>
                </h6>
              </div>
            </div>
           
            <div className="row pt-4">
              <div className="col-md-6">
                <h6 className="color_gray">Height</h6>
              </div>
              <div className="col-md-6">
                <h6>
                {userviewticket?.request?.is_sub_user === false ?
          <>{userviewticket?.request?.mainuser?.height} {userviewticket?.request?.mainuser?.height_unit} </>:
          <>{userviewticket?.request?.user?.height} {userviewticket?.request?.user?.height_unit} </> 
          }
                </h6>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-6">
                <h6 className="color_gray">Weight</h6>
              </div>
              <div className="col-md-6">
                <h6>
                {userviewticket?.request?.is_sub_user === false ?
          <>{userviewticket?.request?.mainuser?.weight} {userviewticket?.request?.mainuser?.weight_unit}</>  :
          <>{userviewticket?.request?.user?.weight} {userviewticket?.request?.user?.weight_unit}</> 
          }
                </h6>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-md-6">
                <h6 className="color_gray">Diease</h6>
              </div>
              <div className="col-md-6">
                <h6>--</h6>
              </div>
            </div>
          </div>
          <div className='col-md-8 pt-2'>
          <button onClick={finaloption} className="btn btn-info mt-3 btn-sm custome_msg_button mb-3">
              Message
            </button>
            {activee === 1 ? 
            <button  
            onClick={() => handleAcceptClick(userviewticket.id)} 
            className="btn btn-success btn-sm ml-3 px-4 custome_msg_button">
                   Accept
                 </button>
                 : null }
          </div>
        </div>
      </div>
      </div>
      <div className='col-md-6'>
      <div className="col-md-12 bg-white mt-3 background_color_white_fix_height py-3" id="style-1">
        <h4 className="heading_color">
          <b>Documents</b>
        </h4>
       
        {activee === 0 ? 
        <>
        {requestdata?.map((item,index)=>{
             
             return(
               <>
           {/* <p className='mb-1 mt-3'><b>Question: </b>{item?.question?.question}</p> */}
         {  item?.typeQ === "Document" ? (
           <React.Fragment key={index}>
             <p className='mb-1 mt-3'><b>Question: </b>{item?.question?.question}</p>
           </React.Fragment>
         ) : null}
           {item?.typeQ !== "Document" ?  
          null
           :
           <a href={`${item?.answer}`} target='_blank' className='text_dec_none'>
            <p className='my-3'>
            <img className='img-fluid show_doc1' src={`${item?.answer}`} /><br/>
            <b className='mb-1 badge badge-info'>Document Click To Open </b></p> 
            </a>  }
           </>
             )
           })} </>:
           <p className='mb-1' style={{color:"red"}}><b>Details will be shown when the request will be accepted</b></p>}
      </div>
      </div>
      </div>

      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="col-md-12 background_color_white_fix_height py-3" id="style-1">
            <h4 className="heading_color">
              <b>Notes</b>
            </h4>
            <div className="col-md-12 background_text_msg mt-4">
              <h6>Hello ! I am suffering from fever...... </h6>
            </div>
            <div className="row pt-2">
              <div className="col-md-6">
                <h6>
                  <span className="ico_color">
                    <i class="far fa-user"></i>
                  </span>{' '}
                  {userviewticket?.request?.is_sub_user === false ?
         <>{userviewticket?.request?.mainuser?.user?.name} </> :
         <>{userviewticket?.request?.user?.name} </> 
          }
                </h6>
              </div>
              <div className="col-md-6 text-right">
                <h6 className="color_gray">
                <Moment format="YYYY-MM-DD / HH:mm:ss A" >
            {userviewticket?.created_date}
            </Moment>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="col-md-12 background_color_white_fix_height py-3" id="style-1">
            <h4 className="heading_color">
              <b>Questions/ Answers</b>
            </h4>
            {/* <div className="row pt-2">
              <div className="col-md-6">
                <span className="upload_text_ico">
                  <i class="far fa-file-pdf"></i>{' '}
                </span>{' '}
                <span className="upload_text">Checkup Reports</span>
              </div>
              <div className="col-md-6 text-right">
                <span className="upload_text_ico">
                  <i class="fas fa-download"></i>
                </span>{' '}
                &nbsp;
                <span className="upload_text_ico">
                  <i class="far fa-trash-alt"></i>
                </span>
              </div>
              <div className="col-md-12">
                <hr />
              </div>
            </div> */}
            <div className='overflow_s'>
            {requestdata?.map((item,index)=>{
             
              return(
                <>
            {/* <p className='mb-1 mt-3'><b>Question: </b>{item?.question?.question}</p> */}
          {  item?.typeQ !== "Document" ? (
            <React.Fragment key={index}>
              <p className='mb-1 mt-3'><b>Question: </b>{item?.question?.question}</p>
            </React.Fragment>
          ) : null}
            {item?.typeQ === "Document" ?  
            <>
            {/* <a href={`https://backend.h3lth.net${item?.answer}`} target='_blank' className='text_dec_none'>
            <p className='my-3'>
            <img className='img-fluid show_doc1' src={`https://backend.h3lth.net${item?.answer}`} /><br/>
            <b className='mb-1 badge badge-info'>Document Click To Open </b></p> 
            </a> */}
            
            </>
            :
            <p className='mb-1'><b>Answer: </b>{item?.answer}</p> }
            </>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userdetails
