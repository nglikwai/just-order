import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async redirect({ url, baseUrl }: any) {
      // Redirect to business dashboard after sign in
      if (url.startsWith(baseUrl)) {
        return `${baseUrl}/business/dashboard`;
      }
      return `${baseUrl}/business/dashboard`;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
