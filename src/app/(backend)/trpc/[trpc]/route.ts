import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";
import { appRouter } from '@/server/routers/_app';

const handler = (request: NextRequest) => { 
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: request,
    router: appRouter,
    createContext:()=>({})
  })
}

export { handler as GET, handler as POST } 
