
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/lib/utils/models/user.model";
import Admin from "@/lib/utils/models/admin.model";
import bcrypt from "bcrypt";
import { connectToDb } from "@/lib/utils/database/db";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        if (!credentials) {
          return null;
        }

        await connectToDb()

        // Attempt to find an admin with the provided email
        let user = await Admin.findOne({ email: credentials.email });
        
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          // Return admin user with role
          return { id: user._id, name: user.name, email: user.email, role: "admin" };
        } 
        
        // If not found in Admin, attempt to find in User
        user = await User.findOne({ email: credentials.email });
        
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          // Return regular user with role
          return { id: user._id, name: user.name, email: user.email, role: "user" };
        }

        // If no matching user is found
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.role = token.role as string
      return session;
    },
  },
  pages: {
    signIn: "admin-67-h456", 
    // Custom login page
   
  },
  secret: process.env.NEXTAUTH_SECRET,
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
