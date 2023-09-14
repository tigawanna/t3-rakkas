import { trpc } from "./trpc";
import { httpBatchLink } from "@trpc/react-query";
import superjson from "superjson";

const getBaseUrl = () => {
    if (typeof window !== "undefined") return ""; // browser should use relative url
    const url = import.meta.url;
    const urlObj = new URL(url);
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return urlObj.origin;
};


export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: `/api/trpc`,
        }),
    ],
    transformer: superjson
});
