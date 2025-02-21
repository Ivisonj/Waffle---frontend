import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
      },
      authorize: async (credentials) => {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/signin",
          {
            email: credentials.email,
          }
        );

        const user = response.data;

        if (!user) {
          throw new Error("Credenciais Inválidas");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});
