import NextAuth from "next-auth"
import EmailProvider from 'next-auth/providers/email'

import { PrismaAdapter } from '@auth/prisma-adapter'

 
export const {
     handlers: { GET, POST },
    = auth, 
    } = NextAuth({
        adapter: PrismaAdapter(),
  providers: [
    EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
    })
  ],
})