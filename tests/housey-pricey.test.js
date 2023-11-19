const fairlyPriced = require("../housey-pricey");

const logSpy = jest.spyOn(console, "log");

describe("Housey Pricey", () => {
    test("unfair price", () => {
        fairlyPriced(8, 10, 10, 100, 2_500_000);
        expect(logSpy).toHaveBeenCalledWith("Peter and Julia are paying an unfair price");
    });

    test("unfair price", () => {
        fairlyPriced(8, 10, 10, 100, 2_000_000);
        // Price: 2030000
        expect(logSpy).toHaveBeenCalledWith("Peter and Julia are paying a fair price");
    });

    test("equal, fair price", () => {
        fairlyPriced(8, 10, 10, 100, 2_030_000);
        expect(logSpy).toHaveBeenCalledWith("Peter and Julia are paying a fair price");
    });
});
