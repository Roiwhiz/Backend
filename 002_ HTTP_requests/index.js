import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Welcome!")
})

app.get("/about", (req,res) => {
    res.send("My name is Salaudeen Toheeb. I am a fullstack web developer")
})

app.listen(port, () => {
    console.log(`Server running at port ${port}.`)
})