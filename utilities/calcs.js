const counter = (arr) => {
    return arr.reduce((acc, next) => {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
};

const mode = (arr) => {
    let freqCounter = counter(arr);
    let count = 0;
    let modeNumber;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            modeNumber = key;
            count = freqCounter[key];
        }
    }
    return modeNumber;
};

const arrayIze = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let item = Number(str[i]);

        if (Number.isNaN(item)) {
            return new Error("Not a valid number");
        }
        result.push(item);
    }
    return result;
};

const mean = (nums) => {
    // average
    if (nums.length === 0) return 0;
    return (
        nums.reduce((acc, next) => {
            return acc + next;
        }) / nums.length
    );
};

const median = (nums) => {
    // value in the middle of the data set
    nums.sort((a, b) => a - b);
    let middle = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middle] + nums[middle - 1]) / 2;
    } else {
        median = nums[middle];
    }
    return median;
};

module.exports = {
    mean,
    median,
    mode,
    arrayIze,
};
