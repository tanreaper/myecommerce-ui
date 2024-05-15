import React, { useState } from 'react';
import axios from 'axios';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [backend, setBackend] = useState('');
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
        setName(value);
    } else if (name === 'email') {
        setEmail(value);
    }
};

  const handleSelectChange = (e)=>{
    setBackend(e.target.value);
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    if(backend === "python"){
        console.log(name)
        console.log(email)
        var body = {
            name : name,
            email : email
        }
          axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/signup',
            data: body
            
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.error('Error:', error);
          });
    }
  }
    return (
        
            <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-50'>
                <p className='text-5xl font-semibold'>SignUp Page</p>
                <div className='mt-8'>
                    <div>
                      <label className='text-lg font-medium'>Name</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type='text' name='name' value={name} onChange={handleInputChange} placeholder='Name' />
                    </div>
                    <div className='input'>
                    <label className='text-lg font-medium'>Email</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type='email' name='email' value={email} onChange={handleInputChange} placeholder='Email' />
                    </div>
                </div>
                <div>
                    <select id='backendSelect' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' value={backend} onChange={handleSelectChange}>
                        <option value=''>Select Backend</option>
                        <option value='python'>Python</option>
                        <option value='go'>Go</option>
                    </select>
                </div>
                <div className='submit-container' >
                    <div className='mt-8 flex flex-col gap=-y-4'>
                        {/* <button className='active:scale-[.98] active:duration-75 py-3 rounded-xl bg-orange-500 text-white text-lg font-bold' type='submit'>Submit</button> */}
                        <input className={'active:scale-[.98] active:duration-75 py-3 rounded-xl bg-orange-500 text-white text-lg font-bold'} type="button" onClick={onButtonClick} value={'Log in'} />
                    </div>
                </div>
            </div>
        
    );
};

export default Signup;
