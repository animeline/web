import express from "express";

const app = express().disable("x-powered-by");;

app.use(express.json())

export default app;
