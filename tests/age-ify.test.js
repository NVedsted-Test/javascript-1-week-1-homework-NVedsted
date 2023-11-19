const calculateAge = require("../age-ify");

const logSpy = jest.spyOn(console, "log").mockImplementation();

describe("Age-Ify", () => {
    test("should log age in future 1", () => {
        calculateAge(1987, 2027);
        expect(logSpy).toHaveBeenCalledWith("You will be 40 years old in 2027");
    });

    test("should log age in future 2", () => {
        calculateAge(1987, 2045);
        expect(logSpy).toBeCalledWith("You will be 58 years old in 2045");
    });
});
