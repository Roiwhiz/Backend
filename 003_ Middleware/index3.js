import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";
const app = express();
const port = 3000;
var details = " ";
app.use(bodyParser.urlencoded({ extended: true }));

function credentials(req,res,next) {
    console.log(req.body);
    var { email , password } = req.body;
    details = `${email} <br/> ${password}`;
    next();
}

app.use(credentials);

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/Public/index.html")
})

app.post("/submit", (req,res) => {
    res.send(`<h1>Your credentials are: </h1><p>${details}</p>`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})