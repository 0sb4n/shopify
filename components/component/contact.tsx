"use client"
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formData } from "@/Constants";

export default function Contact() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create URL for image preview
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create URL for image preview
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, including the uploaded image.
    console.log(image); // This will log the image file.
  };

  return (
    <div className="relative mx-auto max-w-md rounded-lg  p-6 shadow-2xl transition-all duration-300 hover:scale-105">
      <h3 className="mb-4 text-2xl font-semibold">TrustedRepairs request form</h3>
<p className="text-sm font-medium text-slate-700 mb-4">Fill out the form to request electric services or products. Upload an image if needed.</p>
      <form className="space-y-4" onSubmit={handleSubmit}>

        <div className="grid grid-cols-2 gap-4" >
        {
          formData.slice(0,2).map((data,index)=>{
            return (

              <div className="space-y-2 "  key={index}>
                <Label htmlFor="name" className="text-sm focus:outline-none  font-bold">{data.label}</Label>
                <Input id="name"  className="text-sm  font-bold shadow-inner border-none" placeholder={data.placeholder}/>
              </div>
              
            )
          })
        }
        </div>
        {
          formData.slice(2,3).map((data,index)=>{
            return (

              <div className="space-y-2 "  key={index}>
                <Label htmlFor="name" className="text-sm  font-bold">{data.label}</Label>
                <Input id="name" className="text-sm  font-bold shadow-inner border-none" placeholder={data.placeholder}/>
              </div>
              
            )
          })
        }
        {
          formData.slice(3,4).map((data,index)=>{
            return (

              <div className="space-y-2" key={index}>
              <Label htmlFor="category" className="text-sm font-bold">{data.label}</Label>
              <Select  >
                <SelectTrigger  className="relative p-6 text-sm font-bold text-slate-600 bg-white rounded-lg shadow-inner border-none">


                  <SelectValue  placeholder={data.value} />
                </SelectTrigger>
                <SelectContent >
                {
                  data.options?.map((option,i)=>{
                    return (

                
                  <SelectItem value={option } key={i}>{option}</SelectItem>
                 
              
                    )
                  })
                }
                  </SelectContent>
                
              </Select>
            </div>
              
            )
          })
        }
        
         
      
        <div className="space-y-2">
          <Label htmlFor="image">Upload Image</Label>
          <div
            className={`flex flex-col items-center justify-center rounded-md border-2 border-dashed ${
              dragging ? "border-blue-500 bg-blue-100" : "border-primary-foreground bg-slate-300"
            } px-4 py-6 text-center`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {imagePreview ? (
              <Image src={imagePreview} alt="Preview" className="max-h-32 object-contain mb-2" />
            ) : (
              <div className="space-y-1 text-sm text-primary-foreground">
                <p>Drag and drop your image here</p>
                <p>or</p>
                <input id="image" type="file" accept="image/*" onChange={handleImageUpload} hidden />
                <Button variant="secondary" onClick={() => document.getElementById("image")?.click()}>
                  Select a file
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
