const { mean, median, mode } = require("./utilities/calcs");

test("all functions return 0 when nums are length 0", () => {
    let nums = [];
    let meanCalc = mean(nums);
    let medianCalc = median(nums);
    let modeCalc = mode(nums);
    expect(meanCalc).toEqual(0);
    expect(medianCalc).toEqual(0);
    expect(modeCalc).toEqual(0);
});

test("all functions result in correct values", () => {
    let nums = [1, 1, 2, 3];
    let meanCalc = mean(nums);
    let medianCalc = median(nums);
    let modeCalc = mode(nums);
    expect(meanCalc).toEqual(1.75);
    expect(medianCalc).toEqual(1.5);
    expect(modeCalc).toBe(1);
});
