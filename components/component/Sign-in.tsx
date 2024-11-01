"use client"
import React, { useState } from 'react'
import { Button ,} from '../ui/button'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Loader from './Loader';
import { useRouter } from 'next/navigation';




const Sign = () => {
    const router = useRouter()
    const [formValues , setFormValues]=useState({email:"",name:"",password:""})
    const [loading ,setIsLoading]=useState(false)
   
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
          const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
      }
      const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault()
        setIsLoading(true)
        const res = await fetch('/api/user/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formValues.email,
                name: formValues.name,
                password: formValues.password
            }),

        })
if(res.ok){
    router.push('/Chat')
    setIsLoading(false)

}else{
    alert('error')
    setIsLoading(false)
}
    
      }
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
      {loading && <Loader/>}
      <div className="relative pb-10 w-80  mx-auto max-w-md rounded-lg  p-6l transition-all duration-300 hover:scale-105 shadow-lg p-4">
      
        <h3 className="mb-4 text-2xl font-semibold text-center">
         Create your Account
        </h3>
        <p className="text-sm font-medium text-slate-700 mb-4">
          
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}  >
          
            
              <div className="space-y-2" >
                <Label htmlFor='name' className="text-sm font-bold">
                 name
                </Label>
                <Input
                  id="name"
                  name='name' // Provide a fallback value in case data.name is undefined
                  value={formValues.name}
                  onChange={handleChange}
                  type='text'
                  className="text-sm font-bold shadow-lg border-none"
                  placeholder='Enter you name'
                />
              </div>
              <div className="space-y-2" >
                <Label htmlFor='name' className="text-sm font-bold">
                 Email
                </Label>
                <Input
                  id="name"
                  type='email'
                  onChange={handleChange}
                  name='email' // Provide a fallback value in case data.name is undefined
                  value={formValues.email}
                  
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
                 onChange={handleChange}
                className="text-sm font-bold shadow-lg border-none"
                placeholder="Enter password"
              />
            </div>
         
         
           
           
         
        
          <div className="flex h-4 justify-center">
         <Button disabled={loading}>{
            loading?'signing-up..':"sign-Up"
            }</Button>
          </div>
        </form>
      </div>
      </div>
    )
    
}

export default Sign