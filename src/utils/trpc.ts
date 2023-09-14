import type { AppRouter } from '@/routes/api/trpc/setup/routes/root';
import { createTRPCReact } from '@trpc/react-query';


export const trpc = createTRPCReact<AppRouter>();
