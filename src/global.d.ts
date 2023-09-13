
// declare module "rakkasjs" {
// }

interface ServerSideLocals {
    session: SessionRequest["session"];
}
interface ImportMetaEnv {
    VITE_APP_NAME: string;
    VITE_GQL_URI: string;
    // others...
}
