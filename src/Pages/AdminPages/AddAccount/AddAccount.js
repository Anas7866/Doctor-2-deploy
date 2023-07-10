import React, { useEffect, useState } from 'react'
import "./AddAccount.scss"
import { addbakdetails, getbankdetails, updatebakdetails } from '../../../Store/Bankdetails/actions';
import { useDispatch, useSelector } from 'react-redux';

function AddAccount() {
   const dispatch = useDispatch();
   const [accountname, setAccountname]= useState("");
   const [address, setAddress]= useState("");
   const [bankname, setBankname]= useState("");
   const [city, setCity]= useState("");
   const [country, setCountry]= useState("");
   const [createddate, setcreateddate]= useState("");
   const [iban, setIban]= useState("");
   const [phonenumber, setPhone]= useState("");

   const allbankdetails = useSelector((state) => state.Bankdetails?.allbankdetails);

   console.log("all bank details", allbankdetails)



  //  functions for updating the data---------------------------- 
   const handleAccountNameChange = (event) => {
    const value = event.target.value;
    setAccountname(value);
  };

  const handleIbanChange = (event) => {
    const value = event.target.value;
    setIban(value);
  };

  
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  };
  
  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };


  const handleBankChange = (event) => {
    const value = event.target.value;
    setBankname(value);
  };
  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };
  const handleCountryChange = (event) => {
    const value = event.target.value;
    setCountry(value);
  };
//  functions for updating the data----------------------------


    useEffect(() => {
        dispatch(getbankdetails());
      }, []);
      useEffect(() => {
        setAccountname(allbankdetails?.account_name);
        setAddress(allbankdetails?.address);
        setBankname(allbankdetails?.bank_name);
        setCity(allbankdetails?.city);
        setCountry(allbankdetails?.country);
        setIban(allbankdetails?.iban);
        setPhone(allbankdetails?.phone_number);
      }, [allbankdetails]);


    const handleclick = () => {
        dispatch(updatebakdetails({
            accountname: accountname,
            iban: iban,
            phone_number: phonenumber,
            bank_name: bankname,
            address: address,
            city: city,
            country: country
         }));
    }

    const handleclickAdd = () => {
      dispatch(addbakdetails({
          accountname: accountname,
          iban: iban,
          phone_number: phonenumber,
          bank_name: bankname,
          address: address,
          city: city,
          country: country
       }));
  }
 

  return (
    <div className='col-md-12 pt-3'>
        <div className='col-md-12 p-3 background_card_one1'  id="style-1">
          <div className='row'>
            {allbankdetails === null ?
             <div className='col-md-6'>
             <label className='pt-3'>Account Name</label>
             <input className='form-control w-100' type='text' value={accountname} onChange={handleAccountNameChange} />
             <label className='pt-3'>IBAN</label>
             <input className='form-control w-100' type='text' value={iban} onChange={handleIbanChange} />
             <label className='pt-3'>Phone Number</label>
             <input className='form-control w-100' type='phone' value={phonenumber} onChange={handlePhoneChange} />
             <label className='pt-3'>Bank Name</label>
             <input className='form-control w-100' type='text' value={bankname} onChange={handleBankChange} />
             <label className='pt-3'>Address</label>
             <input className='form-control w-100' type='text' value={address} onChange={handleAddressChange} />
             <label className='pt-3'>City</label>
             <input className='form-control w-100' type='text' value={city} onChange={handleCityChange} />
             <label className='pt-3 pb-2'>Country</label>
             <input className='form-control w-100' type='text' value={country} onChange={handleCountryChange}  />
             <button className='btn btn-primary px-5 mt-3' onClick={handleclickAdd}>Submit</button>
         </div>
            :
             <div className='col-md-6'>
             <label className='pt-3'>Account Name</label>
             <input className='form-control w-100' type='text' value={accountname} onChange={handleAccountNameChange} />
             <label className='pt-3'>IBAN</label>
             <input className='form-control w-100' type='text' value={iban} onChange={handleIbanChange} />
             <label className='pt-3'>Phone Number</label>
             <input className='form-control w-100' type='phone' value={phonenumber} onChange={handlePhoneChange} />
             <label className='pt-3'>Bank Name</label>
             <input className='form-control w-100' type='text' value={bankname} onChange={handleBankChange} />
             <label className='pt-3'>Address</label>
             <input className='form-control w-100' type='text' value={address} onChange={handleAddressChange} />
             <label className='pt-3'>City</label>
             <input className='form-control w-100' type='text' value={city} onChange={handleCityChange}  />
             <label className='pt-3 pb-2'>Country</label>
             <input className='form-control w-100' type='text' value={country} onChange={handleCountryChange}  />
             <button className='btn btn-primary px-5 mt-3' onClick={handleclick}>Update</button>
         </div>
            }
           
            <div className='col-md-6 text-center m-auto'>
                <img className='img-fluid' src='/images/acc.gif' alt='img_crashed' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default AddAccount
