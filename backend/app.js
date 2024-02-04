import express from "express";
import {userRouter} from "./routes/User.js";
import cookieParser from "cookie-parser";

export const app=express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));  //limit of pixels
app.use(cookieParser());

app.use("/api/v1", userRouter);
