import { json } from "@hattip/response";
import { StatusCodes } from "http-status-codes";
import { RequestContext } from "rakkasjs";


export async function get(ctx: RequestContext) {
    console.log("import.meta.env", import.meta.env);
    return json({ message: "jeffery wasa the goat " }, { status: StatusCodes.ACCEPTED });
}
