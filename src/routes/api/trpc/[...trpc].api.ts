import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from './setup/routes/root';
import { createTRPCContext } from './setup/trpc';
import { RequestContext } from 'rakkasjs';

export async function all(ctx: RequestContext){
    return fetchRequestHandler({
        endpoint: '/api/trpc',
        req: ctx.request,
        router: appRouter,
        createContext:createTRPCContext,
    });
}
