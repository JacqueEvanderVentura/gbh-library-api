import express, { Express } from "express";
import cors from "cors";
import router from "./router";

export const app: Express = express();

const PORT = 3000

app.disable("etag");
app.set("port", PORT);


app.use(
  cors({
    origin: (origin: any, callback: any) => callback(null, true),
    credentials: true,
  })
);

app.use(router);