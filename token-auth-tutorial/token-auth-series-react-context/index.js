const express = require("express");
const app = express();
require("dotenv").config();
const expressJwt = require("express-jwt");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({ secret: process.env.SECRET }));

//connect to db
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/todo-auth-example",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// app.use("/todo", require("./routes/todo"));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
});

app.use("/auth", require("./routes/auth"));

// This was here already
app.use("/api/todo", require("./routes/todo.js"));


app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
