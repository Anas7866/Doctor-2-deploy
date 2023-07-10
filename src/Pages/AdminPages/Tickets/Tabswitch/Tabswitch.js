import React, { useState, useEffect } from 'react'
import '../Ticket.scss'
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { declineticket, declineticketsuccess, getallcompletedticket, getallnewtickets, getallpendingticket, ticketacceptance } from '../../../../Store/Auth/actions';
import Moment from 'react-moment';
import 'moment-timezone';

function Tabswitch() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [Tab, setTab] = useState(1)
  const [newurllopen, setNewurllopen] = useState("");
  const [newurllprevious, setNewurllprevious] = useState("");
  const [ RequestId, setRequestID] = useState("");
  const [ Addreason, setAddreason] = useState("");
  console.log("RequestId",RequestId)
  const tabone = () => {
    setTab(2)
  }
  const tabtwo = () => {
    setTab(1)
  }
  const tabone2 = () => {
    setTab(3)
  }
  const tabone4 = () => {
    setTab(4)
  }
  const getopenticketscount = useSelector((state) => state.Auth?.getallnewtickets?.count);
  const getopenticketspaginationprevious = useSelector((state) => state.Auth?.getallnewtickets?.previous);
  const getopenticketspagination = useSelector((state) => state.Auth?.getallnewtickets?.next);
  const getopentickets = useSelector((state) => state.Auth?.getallnewtickets?.results);
  const getpendingtickets = useSelector(
    (state) => state.Auth?.getallpendingtickets
  );
  const getcompletedtickets = useSelector(
    (state) => state.Auth?.getallcompletedtickets
  );

  const questionroute = (id) => {
    history.push(`/QA/${id}`);
  };
  const handleAddreasonChange = (event) => {
    const value = event.target.value;
    setAddreason(value);
  };
  // const useInterval = (callback, delay) => {
  //   useEffect(() => {
  //     const interval = setInterval(callback, delay);
  
  //     return () => clearInterval(interval);
  //   }, [callback, delay]);
  // };

  
  useEffect(() => {
    const newurl = "/doctor-portal/api/tickets/";
    dispatch(getallnewtickets(newurl));
    dispatch(getallpendingticket());
    dispatch(getallcompletedticket());
    setNewurllopen(getopenticketspagination);
    setNewurllprevious(getopenticketspaginationprevious);
  }, []);


  // useInterval(() => {
  //   dispatch(getallnewtickets());
  //   dispatch(getallpendingticket());
  //   dispatch(getallcompletedticket());
  // }, 1000);
  const handleAcceptClick = (itemId) => {
    dispatch(
      ticketacceptance({
        id: itemId,
      })
    );
   
  
    // console.log("Accept button clicked for item ID:", itemId);
  };

  const handleDeclineTicket = (itemId) => {
    dispatch(
      declineticket({
        request: RequestId,
        reason: Addreason,
      })
    );
  }
  const handlepaginationopennext = () => {
    dispatch(getallnewtickets(newurllopen));
  };
  const handlepaginationopenprevious = () => {
    dispatch(getallnewtickets(getopenticketspaginationprevious));
  };
  // console.log("sdsdsdsds+++++", getopenticketspagination,"previous---------------->",getopenticketspaginationprevious);
  return (
    <>
       {Tab === 1 ? (
        <div className="col-md-12 px-0">
          <div className="row pt-2 mb-3">
            <div className="col-md-6">
              <span className="active_tab" onClick={tabtwo}>
               Open Tickets&nbsp;&nbsp;<span className="btn btn-sm btn-danger px-3"><b>{getopenticketscount}</b></span>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="non_active_tab" onClick={tabone}>
                In-Progress Tickets
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="non_active_tab" onClick={tabone2}>
                Completed Tickets
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
                {getopentickets?.length === 0 ?
                <tr className="text-center">
                <td colSpan={4}>No Record Avaliable</td>
              </tr>
              :
             
           <>
           {getopentickets?.map((item, index) => {
            console.log("<><><><><><<><><???????????????",item.request.id)
             return(
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
               <td>
               <Link to={`/Userdetail/${item.id}?accepted=1`}>
                 <button className="btn btn-primary btn-sm rounded-pill px-4 ">
                 Preview
                 </button>
                 </Link> &nbsp;
               <button  onClick={() => handleAcceptClick(item.id)} className="btn btn-success btn-sm rounded-pill px-4 background_accept">
                   Accept
                 </button>
                 &nbsp;
               <button onClick={(e) => {
                e.preventDefault();
                setRequestID(item?.id);
              }} className="btn btn-danger btn-sm rounded-pill px-4 " data-toggle="modal" data-target="#exampleModal">
                   Decline
                 </button>
                 
               </td>
             </tr>
             );
           })}
           {/* modal for declining the request  */}
           <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Reason For Declining The Request
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <textarea className='form-control' placeholder='Write reason here' value={Addreason} onChange={handleAddreasonChange} ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                
                  <button  onClick={handleDeclineTicket}  type="button" className="btn btn-primary"  data-dismiss="modal">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

           </>
            }
               <td  colSpan={5}>
                {getopenticketspaginationprevious === null ? <span  className='btn btn-outline-light btn-sm' id="stopped" >Previous</span>:
                <span onClick={handlepaginationopenprevious} className='btn btn-outline-primary btn-sm'>Previous</span>}
                &nbsp;&nbsp;
                {getopenticketspagination === null ? 
                <span className='btn btn-outline-light btn-sm px-4' id="stopped" >Next</span> 
                :
                <span onClick={handlepaginationopennext} className='btn btn-outline-primary btn-sm px-4'>Next</span>}
               </td>
              </tbody>
            </table>
          </div>
        </div>
      ) : Tab === 2 ? (
        <div className="col-md-12 px-0">
          <div className="row pt-2 mb-3">
          <div className="col-md-6">
              <span className="non_active_tab " onClick={tabtwo}>
             Open Tickets
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="active_tab" onClick={tabone}>
                In-Progress Tickets&nbsp;&nbsp;<span className="btn btn-sm btn-danger px-3"><b>{getpendingtickets?.length}</b></span>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="non_active_tab" onClick={tabone2}>
                Completed Tickets
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
              </tbody>
            </table>
          </div>
        </div>
      ) :  Tab === 3 ? (
        <div className="col-md-12 px-0">
          <div className="row pt-2 mb-3">
          <div className="col-md-6">
              <span className="non_active_tab " onClick={tabtwo}>
              Open Tickets
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="non_active_tab" onClick={tabone}>
                In-Progress Tickets
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="active_tab" onClick={tabone2}>
                Completed Tickets&nbsp;&nbsp;<span className="btn btn-sm btn-danger px-3"><b>{getcompletedtickets?.length}</b></span>
              </span>
            </div>
            <div className="col-md-6 text-right">
             
            </div>
          </div>
          {/* <hr className="my-2" /> */}
          <div className="col-md-12 mt-2 px-0 height_fix_list">
          <table className="table table-bordered">
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
                {getcompletedtickets?.length === 0 ? 
                  <tr className="text-center">
                  <td colSpan={5}>No Record Avaliable</td>
                </tr> 
              : 
              
                <>
                {getcompletedtickets?.map((item, index) => {
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
                    <td>
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
              </tbody>
            </table>
          </div>
        </div>
      )  : null}
    </>
  )
}

export default Tabswitch
