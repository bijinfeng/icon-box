import { config } from "@/libs/bknd";
import { serve } from "bknd/adapter/nextjs";

// optionally, you can set the runtime to edge for better performance
export const runtime = "edge";

const handler = serve({
  ...config,
  cleanRequest: {
    // depending on what name you used for the catch-all route,
    // you need to change this to clean it from the request.
    searchParams: ["bknd"],
  },
});

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
