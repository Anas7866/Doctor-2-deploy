import React, { useEffect, useState } from 'react'
import "./AddOption.scss"
import Axios from 'axios';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { getprofile, submitopinion } from '../../../Store/Auth/actions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function AddOpinion() {
    const [accountname, setAccountname]= useState("");
    const [iban, setIban]= useState("");
    const [file, setFile]= useState(null);
   const [opinion, setOpinion]= useState("");
   const [responses, setResponses] = useState([]);
   const dispatch = useDispatch();
   let { id } = useParams();
   let number = parseInt(id);

   useEffect(() => {
    dispatch(getprofile());
    // setgetalladmindetails(getalladmindetails);
  }, []);
  const getalladmindetails = useSelector(
    (state) => state.Auth?.profilesuccessadmin?.profile?.id
  );
 console.log("getalladmindetails",number)

     //  functions for updating the data---------------------------- 
    const handleFileChange = async (event) => {

        // Create form data
    const formData = new FormData();
        formData.append('file', file);
        try {
          // Send the image data to the API endpoint
          const response = await Axios.post(`https://backend.h3lth.net/doctor-portal/api/request/upload-document/`, formData
          );
    
          console.log('Image uploaded successfully!', response.data);
          setResponses((prevResponses) => [...prevResponses, response.data.file_url]);
        //   setUpdateimage(response.data.result)
          toast.success(response.data.message);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };




      const handleInputChange = (event) => {
        setFile(event.target.files[0]);
      };


      useEffect(() => {
        if (file) {
          console.log("file<><><><>", file);
          handleFileChange();
        }
      }, [file]);

      const handleclick = () => {
        dispatch(submitopinion({
            doctor: getalladmindetails,
            request : number,
            opinion : opinion,
            files : responses,
          }));
    }

  
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setOpinion(value);
  };
  return (
    <div className='col-md-12 pt-3'>
    <div className='col-md-12 p-3 background_card_one1'  id="style-1">
      <div className='row'>
        <div className='col-md-6 m-auto'>
             <label className='pt-3'>Enter Opinion</label>
             <textarea className='form-control w-100' type='phone' value={opinion} onChange={handlePhoneChange} ></textarea>
             <label className='pt-3'>Upload File</label>
             <input className='form-control' type='file' onChange={handleInputChange} />
             <button className='btn btn-primary px-4 mt-3' onClick={handleclick}> Submit </button>
        </div>
        <div className='col-md-6 text-center'>
        <img className='img-fluid' src='/images/doc.gif' alt='img_crashed' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddOpinion
