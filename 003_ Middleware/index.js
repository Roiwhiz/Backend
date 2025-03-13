import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/Public/index.html")
})

app.post("/submit", (req,res) => {
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
