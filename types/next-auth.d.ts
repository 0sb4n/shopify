// next-auth.d.ts (TypeScript Declaration for NextAuth)
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
user:string
  }

  interface JWT {
    _id: string; // Add the 'id' property to the JWT object
    otpVerified: boolean;
  }
  interface User {
    _id:string
  }
}
