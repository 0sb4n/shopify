// next-auth.d.ts (TypeScript Declaration for NextAuth)
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
user:{
  id?:string
  role:string
}
  }
  interface Token{
    user:{
      role?:string
    }
  }

  interface JWT {
    id: string; // Add the 'id' property to the JWT object
    
   
  }
  interface User {
    id:string
    role:string
  }
}
