// app/api/auth/[...nextauth]/route.ts (Next.js 14 with NextAuth)
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import Admin from '@/lib/utils/models/admin.model';
import { connectToDb } from '@/lib/utils/database/db';
interface Credentials{
  email: string;
  password: string;
}
 const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
    
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials:Credentials | undefined) {
        await connectToDb()
        if (!credentials) return null;

        const user = await Admin.findOne({ email: credentials.email });
        if (!user) return null;

        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) return null;

        return user
      },
    }),
  ],
  pages: {
    signIn: '/admin-67-h456', // Custom login page
  },
  session: {
    strategy: 'jwt',
  },
 
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user =user
      }
      return token;
    },
    async session({ session, token, }) {
      if (token) {
       session.user = token.user as typeof session.user
      }
      return session;
    },
  },
  secret:process.env.NEXTAUTH_SECRET,
  // JWT secret for signing tokens
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
