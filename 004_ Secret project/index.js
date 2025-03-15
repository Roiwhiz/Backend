import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const passcode = "iLoveProgramming";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function authorization(req,res,next) {
    const { name, password } = req.body;
    if (password === passcode) {
        next();
    } else {
        res.status(403).send("Access denied: Incorrect password");
    }
}

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/Public/index.html")
})

app.post("/submit", authorization, (req,res) => {
    res.sendFile(__dirname + "/Public/secret/index.html");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 