const printYears = require("../goodboy-oldboy");

const logSpy = jest.spyOn(console, "log").mockImplementation();

describe("Goodboy Oldboy", () => {
    test("should log human age in future 1", () => {
        printYears(2017, 2027, false);
        expect(logSpy).toHaveBeenCalledWith("Your dog will be 10 human years old in 2027");
    });

    test("should log human age in future 1", () => {
        printYears(2017, 2027, true);
        expect(logSpy).toHaveBeenCalledWith("Your dog will be 70 dog years old in 2027");
    });

    test("should log human age in future 2", () => {
        printYears(2011, 2031, false);
        expect(logSpy).toHaveBeenCalledWith("Your dog will be 20 human years old in 2031");
    });

    test("should log human age in future 2", () => {
        printYears(2011, 2031, true);
        expect(logSpy).toHaveBeenCalledWith("Your dog will be 140 dog years old in 2031");
    });
});
