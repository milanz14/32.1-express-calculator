const express = require("express");
const { mean, median, mode } = require("./utilities/calcs");

app = express();

app.use(express.json());

app.get("/mean", (req, res) => {});

app.get("/median", (req, res) => {});

app.get("/mode", (req, res) => {});

app.use((req, res, next) => {
    const e = new ExpressError("Invalid", 404);
    next(e);
});

app.use((err, req, res, next) => {
    return res.json({
        err: err,
        message: err.message,
        status: err.status,
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000.");
});
