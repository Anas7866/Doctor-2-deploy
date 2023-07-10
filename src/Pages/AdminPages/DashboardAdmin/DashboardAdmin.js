import React, { useState } from "react";
import NavScrollExample from "../HeaderAdmin/HeaderAdmin";
import "./Dashboard.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  getallcompletedticket,
  getallnewtickets,
  getallpendingticket,
  ticketacceptance,
} from "../../../Store/Auth/actions";
import Moment from 'react-moment';
import 'moment-timezone';

function DashboardAdmin() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [Tab, setTab] = useState(2)
 
  const getopentickets = useSelector((state) => state.Auth?.getallnewtickets);
  const getpendingtickets = useSelector(
    (state) => state.Auth?.getallpendingtickets
  );
  const getcompletedtickets = useSelector(
    (state) => state.Auth?.getallcompletedtickets
  );

  const questionroute = (id) => {
    history.push(`/QA/${id}`);
  };
  useEffect(() => {
    // dispatch(getallnewtickets());
    dispatch(getallpendingticket());
    // dispatch(getallcompletedticket());
  }, []);


  // console.log("sdsdsdsds+++++", getpendingtickets);

  return (
    <div className="col-sm-12 p-0">
      <div className="col-md-12 mt-4 px-3">
      <div className="row">
        <div className="col-md-3">
          <Link to="/Myaccount" className="link_style">
          <div className="col-md-12 bg-white text-center py-3 border_radius_div">
            <img className="img-fluid" src="../images/wallet.png" />
            <p className="mb-0 text_style_balance pt-2">Active Balance</p>
            <p className="mb-0 text_style_balance10 ">
              <b>USD 63,900</b>
            </p>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/Tickets" className="link_style">
          <div className="col-md-12 bg-white text-center py-3 border_radius_div">
            <img className="img-fluid" src="../images/coins.png" />
            <p className="mb-0 text_style_balance pt-2">Total Balance</p>
            <p className="mb-0 text_style_balance10 ">
              <b>USD 6,390</b>
            </p>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/Tickets" className="link_style">
          <div className="col-md-12 bg-white text-center py-3 border_radius_div">
          <img className="img-fluid" src="../images/coins.png" />
            <p className="mb-0 text_style_balance pt-2">Completed Tickets</p>
            <p className="mb-0 text_style_balance10 ">
              <b>
              {getcompletedtickets?.length}
              </b>
            </p>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/Myaccount" className="link_style">
          <div className="col-md-12 bg-white text-center py-3 border_radius_div">
          <img className="img-fluid" src="../images/coins.png" />
            <p className="mb-0 text_style_balance pt-2">Pending Tickets</p>
            <p className="mb-0 text_style_balance10 ">
              <b>
                {getpendingtickets?.length}
              </b>
            </p>
          </div>
          </Link>
        </div>
        
      </div>
      </div>
    <div className="col-sm-12 mt-4 padding_admin px-3  ">
    <div
      className="col-md-12 color_gray pb-5 background_color_white"
      id="style-1"
    >
     {Tab === 2 ? (
        <div className="col-md-12 px-0">
          <div className="row pt-2 mb-3">
          <div className="col-md-6">
              
              <span className="" >
               <b>In Progress Tickets</b>&nbsp;&nbsp;<span className="btn btn-sm btn-danger bounce-effect px-3"><b className="">{getpendingtickets?.length}</b></span>
              </span>
             
            </div>
            <div className="col-md-6 text-right">
             
            </div>
          </div>
          {/* <hr className="my-2" /> */}
          <div className="col-md-12 mt-2 px-0 height_fix_list">
            <table className="table table-bordered text-center">
              <thead className="thead-light">
                <tr>
                 
                <th scope="col">Patient Image</th>
                  <th scope="col">Only Initials</th>
                  <th scope="col">Urgency</th>
                  <th scope="col">Time Remaining</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {getpendingtickets?.length === 0 ?
                 <tr className="text-center">
                 <td colSpan={5}>No Record Avaliable</td>
               </tr>
                :
               
               <>
               {getpendingtickets?.map((item, index) => {
                 console.log("map>>>>>>>>>>>>>>>>>>", item?.request?.form?.category)
                 return (
                 <tr>
                   <td>
                    {item?.request?.is_sub_user === false ?
                    <img className="img-fluid img_width_control " src={item?.request?.mainuser?.profileImg} />
                    :
                    <img className="img-fluid img_width_control " src={item?.request?.user?.profileImg} />
                    }
                    
                    </td>
                   <td className="pt-4">
                   {item?.request?.is_sub_user === false ?
                   <>
                    {item?.request?.mainuser?.user?.name}
                    </>
                    :
                    <>
                    {item?.request?.user?.name}
                    </>
                   }
                    </td>
                   <td className="pt-4">{item?.request?.form?.category?.title}</td>
                   <td className="pt-4">
                   <Moment format="YYYY-MM-DD / HH:mm:ss A" >
                    {item?.created_date}
                    </Moment>
                    </td>
                   <td className="pt-4">
                     <Link to={`/Userdetail/${item.id}?accepted=0`}>
                     <button className="btn btn-primary btn-sm rounded-pill px-4 ">
                       {' '}
                       Preview
                     </button>
                     </Link>
                   </td>
                
                 </tr>
                  );
                 })}</>
              }
                 {/* <td colSpan={5}>apply pagination here</td> */}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}



      </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
