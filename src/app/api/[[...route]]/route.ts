import { Hono } from "hono";
import { handle } from "hono/vercel";

import authAPI from "./auth";

const app = new Hono().basePath("/api")
  .route("/auth", authAPI);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof app;