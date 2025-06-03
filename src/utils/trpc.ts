import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@/server/routers/_app';
import { createTRPCReact } from '@trpc/react-query';

const links = [
  httpBatchLink({
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @see https://trpc.nodejs.cn/docs/v11/ssr
     **/
    url: '/trpc',
    // You can pass any HTTP headers you wish here
    async headers() {
      return {
        // authorization: getAuthCookie(),
      };
    },
  }),
]

export const trpcClient = createTRPCClient<AppRouter>({
  links,
});

export const trpcQuery = createTRPCReact<AppRouter>();

export const trpcQueryClient = trpcQuery.createClient({ links });
