import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from '../ui/button';

const AdminL = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative pb-10 w-80  mx-auto max-w-md rounded-lg  p-6l transition-all duration-300 hover:scale-105 shadow-lg p-4">
        
          <h3 className="mb-4 text-2xl font-semibold text-center">
           Admin login 
          </h3>
          <p className="text-sm font-medium text-slate-700 mb-4">
            
          </p>
          <form className="space-y-4" >
            
              
                <div className="space-y-2" >
                  <Label htmlFor='name' className="text-sm font-bold">
                   Email
                  </Label>
                  <Input
                    id="name"
                    name='email' // Provide a fallback value in case data.name is undefined
                   
                    className="text-sm font-bold shadow-lg border-none"
                    placeholder='Enter Email'
                  />
                </div>
                
             
       
           
              <div className="space-y-2">
                <Label htmlFor='email' className="text-sm font-bold">
             Password
                </Label>
                <Input
                  id='email'
                  name="password"
                  
                  className="text-sm font-bold shadow-lg border-none"
                  placeholder="Enter admin password"
                />
              </div>
           
           
             
           
          
            <div className="flex h-4 justify-center">
              <Button type="submit" className='w-32' >
              login
              </Button>
            </div>
          </form>
        </div>
        </div>
      );
}

export default AdminL