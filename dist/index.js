import jwt from "jsonwebtoken";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors({
    origin: "*",
}), bodyParser.json());
const port = 6969;
app.get("/", (_, res) => {
    return res.send({ message: "->JWTHASH<-" }).status(200);
});
app.post("/", (req, res) => {
    const Body = req.body;
    if (!Object.keys(Body).length)
        return res.send({ message: "NO BODY" }).status(400);
    const token = jwt.sign(Body, process.env.JWT_PASS);
    return res.send({ message: "SUCESS", token }).status(200);
});
app.listen(port, () => {
    console.log(`HASHING ON PORT ${port}`);
});
//# sourceMappingURL=index.js.map