


import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Otpverfied() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Verify Your Identity</h1>
        <p className="mt-4 text-muted-foreground">
          Please enter the one-time password (OTP) code sent to your registered device to verify your identity and
          continue.
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <Label htmlFor="otp" className="sr-only">
              OTP Code
            </Label>
            <div className="flex items-center justify-center gap-2">
              <Input
                id="otp"
                type="text"
                maxLength={1}
                pattern="[0-9]*"
                className="w-12 rounded-md shadow-lg border border-input bg-background px-3 py-2 text-center text-lg font-medium text-foreground  transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="0"
              />
              <Input
                id="otp"
                type="text"
                maxLength={1}
                pattern="[0-9]*"
                className="w-12 rounded-md shadow-lg border border-input bg-background px-3 py-2 text-center text-lg font-medium text-foreground  transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="0"
              />
              <Input
                id="otp"
                type="text"
                maxLength={1}
                pattern="[0-9]*"
                className="w-12 rounded-md shadow-lg border border-input bg-background px-3 py-2 text-center text-lg font-medium text-foreground  transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="0"
              />
              <Input
                id="otp"
                type="text"
                maxLength={1}
                pattern="[0-9]*"
                className="w-12 rounded-md shadow-lg border border-input bg-background px-3 py-2 text-center text-lg font-medium text-foreground  transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="0"
              />

            
          
           
             
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 w-full">
          <Button type="submit" > verify</Button>
          <Button variant="outline" className="shadow-xl"> resend otp</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
