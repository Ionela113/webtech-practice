import express from "express"
const app = express()
const PORT = 3001;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world.");
})

app.listen(PORT, () => {
    console.log("Server running.")
})


// http://localhost:3000/
//
// function test() {

// }

// const test = () => {

// } arrow function