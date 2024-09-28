"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
import emailjs from "emailjs-com"; // Import EmailJS



export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    imageBase64:'',
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
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      convertToBase64(file);
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

  // Convert image to Base64
  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string); // Show preview
      setFormValues({ ...formValues, imageBase64: reader.result as string }); // Set Base64 image in form data
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      convertToBase64(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare template parameters for EmailJS
    const templateParams = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      category: formValues.category,
      imageBase64: formValues.imageBase64, // Send image in Base64 format
    };

    // Sending email using EmailJS
    emailjs
      .send(
        "service_so8n6s4", // Replace with your service ID
        "template_b6bhyxp", // Replace with your template ID
        templateParams,
         "5JUB8mcW_h-C9GPrO"// Replace with your user ID
      )
      .then((result) => {
        alert("Email sent successfully!");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.text);
        setIsLoading(false);
      });
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
                placeholder='Enter Your Name'
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
