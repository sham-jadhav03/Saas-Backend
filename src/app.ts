import { Application, Request, Response } from "express";
import express from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server")
})


export default app;
