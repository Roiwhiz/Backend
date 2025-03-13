import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Welcome!")
})

app.get("/about", (req,res) => {
    res.send("My name is Salaudeen Toheeb. I am a fullstack web developer.")
})

app.post("/register", (req,res) => {
    res.sendStatus(201);
})

app.put('/users/:id', (req,res) => {
    res.sendStatus(200)
})

app.patch('/users/:id', (req,res) => {
    res.sendStatus(200);
})

app.delete('/users/:id', (req,res) => {
    res.sendStatus(200);
})


app.listen(port, () => {
    console.log(`Server running at port ${port}.`)
})