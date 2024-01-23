import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';
import axios from 'axios'

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/signup',{
        username,
        email,
        password
        });
    } catch (error) {
       console.log(error);
    }
  }
  // const handleSubmit = async (e) =>{
  //   e.preventDefault();
  //   try {
  //     const res = await fetch('http://localhost:3000/api/auth/signup', {
  //       method:'POST',
  //       headers: { 'Content-type': 'applicaion/json' },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
      
  //   }
  // }
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* leftside */}
        <div className="flex-1">
          <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white'>SIGN UP</span>
              <span className="self-center whitespace-nowrap text-gray-700 text-xl font-bold dark:text-white"> SMART SETDA</span>
          </Link>
          <p className="mb-3 mt-5 text-justify text-gray-500 dark:text-gray-400">
              Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest
            data from other software development tools, so your IT support and operations teams have richer contextual
            information to rapidly respond to requests, incidents, and changes.
          </p>
          
        </div>
        {/* rightside */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label value="Your username or NIP" />
                </div>
                <TextInput id='username' type="text" placeholder="Your username / NIP" value={username} required onChange={(e)=> setUsername(e.target.value)}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your email" />
                </div>
                <TextInput id="email" type="email" placeholder="Your email" value={email} required onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your password" />
                </div>
                <TextInput id="password" type="password" placeholder="Your password" value={password} required onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <Button gradientDuoTone='purpleToBlue' type='submit'>Submit</Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account? </span>
              <Link to='/signin' className='text-blue-500'>
                Sign In
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
