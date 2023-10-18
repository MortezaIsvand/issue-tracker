import NextAuth from "next-auth/next";
import NextAuthOpts from "./NextAuthOptions";

const handler = NextAuth(NextAuthOpts);

export { handler as GET, handler as POST };
