
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export function Contact() {
 
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-0">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 drop-shadow-xl">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground">Fill out the form below to get in touch with our team.</p>
          <Card>
            <CardContent className="space-y-4">
              <div className="grid mt-6 gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="motor">Motor</SelectItem>
                    <SelectItem value="fan">Fan</SelectItem>
                    <SelectItem value="washing-machine">Washing Machine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="product-image">Product Image</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Product"
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <div className="flex items-center">
                    <Button variant="outline">
                      <UploadIcon className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">Our team is here to help you with any questions or concerns.</p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <div className="grid gap-0.5">
                <div className="font-medium">Phone</div>
                <div className="text-muted-foreground">+1 (555) 555-5555</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon className="h-6 w-6 text-primary" />
              <div className="grid gap-0.5">
                <div className="font-medium">Email</div>
                <div className="text-muted-foreground">support@acme.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LocateIcon className="h-6 w-6 text-primary" />
              <div className="grid gap-0.5">
                <div className="font-medium">Address</div>
                <div className="text-muted-foreground">123 Main St, Anytown USA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LocateIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function UploadIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
