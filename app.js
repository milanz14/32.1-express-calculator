const express = require("express");
const ExpressError = require("./utilities/ExpressError");
const { mean, median, mode, arrayIze } = require("./utilities/calcs");

app = express();

app.use(express.json());

app.get("/mean", (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError("Pass list of CSV numbers", 404);
    }
    let str = req.query.nums.split(",");
    let nums = arrayIze(str);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: mean(nums),
    };
    return res.send(result);
});

app.get("/median", (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError("Pass list of CSV numbers", 404);
    }
    let str = req.query.nums.split(",");
    let nums = arrayIze(str);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: median(nums),
    };
    return res.send(result);
});

app.get("/mode", (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError("Pass list of CSV numbers", 404);
    }
    let str = req.query.nums.split(",");
    let nums = arrayIze(str);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: mode(nums),
    };
    return res.send(result);
});

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
