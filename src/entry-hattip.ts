import { RequestContext, createRequestHandler } from "rakkasjs";
import { cookie } from "@hattip/cookie";
import { cors } from "@hattip/cors";

declare module "rakkasjs" {
  interface ServerSideLocals {
    session: any;
  }
}

const attachSession = async (ctx: RequestContext) => {
  try {
    // ctx.locals.session = await getSession(
    //     ctx.platform.request,
    //     ctx.platform.response
    // );

    ctx.locals.session = {
      user: "jeffery",
    };
  } catch (error) {
    throw new Error("Failed to attach session");
  }
};
const logger = async (ctx: RequestContext) => {
  try {
    console.log("========", ctx.ip,"=============");
 } catch (error) {
    throw new Error("Failed to attach session");
  }
};

export default createRequestHandler({
  middleware: {
    // HatTip middleware to be injected
    // before the page routes handler.
    // @ts-expect-error
    beforePages: [cookie(), attachSession],
    // HatTip middleware to be injected
    // after the page routes handler but
    // before the API routes handler
    beforeApiRoutes: [
        logger,
    ],
    // HatTip middleware to be injected
    // after the API routes handler but
    // before the 404 handler
    beforeNotFound: [],
  },

  createPageHooks(requestContext) {
    return {
      emitBeforeSsrChunk() {
        // Return a string to emit into React's
        // SSR stream just before React emits a
        // chunk of the page.
        return "";
      },

      emitToDocumentHead() {
        // Return a string to emit some HTML into the
        // document's head.
        return "";
      },

      extendPageContext(pageContext) {
        // Add properties to the page context,
        // especially to pageContext.locals.
        // Extensions added here will only be
        // available on the server-side.
      },

      wrapApp(app) {
        // Wrap the Rakkas application in some provider
        // component (only on the server).
        // return <SomeProvider>{ app } < /SomeProvider>;
        return app;
      },

      // wrapSsrStream(stream) {
      //   const { readable, writable } = new TransformStream({
      //     transform(chunk, controller) {
      //       // You can transform the chunks of the
      //       // React SSR stream here.
      //       controller.enqueue(chunk);
      //     },
      //   });
      //   // @ts-expect-error
      //   stream.pipeThrough(writable);

      //   return readable;
      // },
    };
  },
});
