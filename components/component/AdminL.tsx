"use client"
import React, { useState } from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from '../ui/button';
import Loader from './Loader';
import axios from 'axios'
import { useRouter } from 'next/navigation';


const AdminL = () => {
  const router = useRouter();
  const [formValues , setFormValues]=useState({
    email:'',
    password:''
  })
  const [isloading,setIsLoading]= useState(false);
const onValueChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
}
const handleSubmit =async (e: React.FormEvent)=>{
  e.preventDefault();
setIsLoading(true);
const formData = {
  email:formValues.email,
  password:formValues.password
}
const res = await axios.post('/api/admin/login',{
  formData
})
}

 
  




    return (
        <div className="flex flex-col items-center justify-center h-screen">
          {isloading && <Loader />}
        <div className="relative pb-10 w-80  mx-auto max-w-md rounded-lg  p-6l transition-all duration-300 hover:scale-105 shadow-lg p-4">
        
          <h3 className="mb-4 text-2xl font-semibold text-center">
           Admin login 
          </h3>
          <p className="text-sm font-medium text-slate-700 mb-4">
            
          </p>
          <form className="space-y-4" onSubmit={handleSubmit} >
            
              
                <div className="space-y-2" >
                  <Label htmlFor='name' className="text-sm font-bold">
                   Email
                  </Label>
                  <Input
                    id="name"
                    name='email' // Provide a fallback value in case data.name is undefined
                    value={formValues.email}
                    onChange={onValueChange}
                    className="text-sm font-bold shadow-lg border-none"
                    placeholder='Enter Email'
                  />
                </div>
                
             
       
           
              <div className="space-y-2">
                <Label htmlFor='password' className="text-sm font-bold">
             Password
                </Label>
                <Input
                  id='password'
                  value={formValues.password}
                  name="password"
                  onChange={onValueChange}
                  className="text-sm font-bold shadow-lg border-none"
                  placeholder="Enter admin password"
                />
              </div>
           
           
             
             
           
          
            <div className="flex h-4 justify-center">
              <Button type="submit" className='w-32' disabled={isloading} >
              {isloading ? 'login...' : 'login'}
              </Button>
            </div>
          </form>
        </div>
        </div>
      );
}

export default AdminL