import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { signInSchema, signUpSchema } from "@/features/auth/validation";

const app = new Hono()
  .post(
    "/login",
    zValidator("json", signInSchema),
    (c) => {
      const { email, password } = c.req.valid("json");

      console.log({ email, password });

      return c.json({ success: "ok" });
    },
  )
  .post(
    "/register",
    zValidator("json", signUpSchema),
    (c) => {
      const { email, password, name } = c.req.valid("json");

      console.log({ email, password, name });

      return c.json({ success: "ok" });
    },
  );

export default app;