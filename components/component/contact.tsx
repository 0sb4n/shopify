"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast, } from "@/hooks/use-toast";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { category } from "@/Constants";
import Loader from "./Loader";




export default function Contact() {
  const {toast} = useToast();
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
   
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles[0]) {
      setFormValues({...formValues, image:droppedFiles[0]}) // Set the dropped file
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string); // Preview the image
      reader.readAsDataURL(droppedFiles[0]);
    }
 
   }

 
  

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
   
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  // Convert image to Base64


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormValues({ ...formValues, image: file });
      setImagePreview(URL.createObjectURL(file)); // Preview the image
      console.log(URL.createObjectURL(file))
    }
  };
 



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    // Create a FormData object for sending the file
    const formData = new FormData();
    formData.append('file', formValues.image as File); // Attach the image file
    formData.append('upload_preset', 'shopify'); // Your Cloudinary upload preset
     
  
   
  
    try {
      // First, upload the image to Cloudinary
    const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dh2epbfpf/upload', {
        method: 'POST',
        body: formData,
      });
  
      const cloudinaryData = await cloudinaryResponse.json();
  
      if (cloudinaryResponse.ok) {
        console.log("Cloudinary Response Data:", cloudinaryData);
  
        // After Cloudinary upload, send the form data (including image URL) to your server
        const formDataToSend = {
          name: formValues.name,
          phone: formValues.phone,
          email: formValues.email,
          category: formValues.category,
          imageUrl: cloudinaryData.secure_url, // Use Cloudinary image URL
        };
  
        const serverResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        });
  
        const result = await serverResponse.json();
        if (serverResponse.ok) {
          toast({
            title: 'Success',
            description: `Your form has been submitted successfully! ${result.messege}`,
            duration: 5000,
           

          });
        } else {
          throw new Error('Error submitting form to the server.');
        }
      } else {
        console.log("Cloudinary Error:", cloudinaryData);
        throw new Error('Cloudinary upload failed.');
      }
    } catch (error) {
      console.log("Error:", error);
      toast({
        title: 'Error',
        description: 'There was an error uploading the image or submitting the form. Please try again.',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="relative mx-auto max-w-md rounded-lg  p-6l transition-all duration-300 hover:scale-105 shadow-2xl p-4">
      {isLoading && <Loader />}
      <h3 className="mb-4 text-2xl font-semibold">
        TrustedRepairs request form
      </h3>
      <p className="text-sm font-medium text-slate-700 mb-4">
        Fill out the form to request electric services or products. Upload an
        image if needed.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          
            <div className="space-y-2" >
              <Label htmlFor='name' className="text-sm font-bold">
                Name
              </Label>
              <Input
                id="name"
                name='name' // Provide a fallback value in case data.name is undefined
                value={formValues.name}
                onChange={handleInputChange}
                className="text-sm font-bold shadow-inner border-none"
                placeholder='Enter Your Name'
              />
            </div>
            <div className="space-y-2" >
              <Label htmlFor='number' className="text-sm font-bold">
                Number
              </Label>
              <Input
                id="number"
                name='phone' // Provide a fallback value in case data.name is undefined
                value={formValues.phone}
                onChange={handleInputChange}
                className="text-sm font-bold shadow-inner border-none"
                placeholder='Enter Your Number'
              />
            </div>
         
        </div>
       
          <div className="space-y-2">
            <Label htmlFor='email' className="text-sm font-bold">
              Email
            </Label>
            <Input
              id='email'
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className="text-sm font-bold shadow-inner border-none"
              placeholder="Enter your email"
            />
          </div>
       
       
          <div className="space-y-2" >
            <Label htmlFor="category" className="text-sm font-bold">
              category
            </Label>
            <Select
              name="category"
              onValueChange={(value) =>
                setFormValues({ ...formValues, category: value })
              }
            >
              <SelectTrigger className="relative p-6 text-sm font-bold text-slate-600 bg-white rounded-lg shadow-inner border-none">
                <SelectValue placeholder='select a product' />
              </SelectTrigger>
              <SelectContent>{
                category.map((category)=>{
                return(

                  <SelectItem key={category.id} value={category.name.toLowerCase() } >
                    {category.name}
                  </SelectItem>
                )
                })
                }
               
              
              </SelectContent>
            </Select>
          </div>
       
        <div className="space-y-2">
          <Label htmlFor="image">Upload Image</Label>
          <div
            className={`flex flex-col items-center justify-center rounded-md border-2 border-dashed ${
              dragging
                ? "border-blue-500 bg-blue-100"
                : "border-primary-foreground bg-slate-300"
            } px-4 py-6 text-center`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Preview"
                className="max-h-32 object-contain mb-2"
                height={56}
                width={56}
              />
            ) : (
              <div className="space-y-1 text-sm text-primary-foreground">
                <p>Drag and drop your image here</p>
                <p>or</p>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("image")?.click();
                  }}
                >
                  Select a file
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}