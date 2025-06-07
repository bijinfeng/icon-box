import NextAuth from 'next-auth';

import { config } from './auth.config'

export default NextAuth({
  ...config,
  session: {
    strategy: 'jwt'
  }
})
