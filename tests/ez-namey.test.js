const randomStartupName = require("../ez-namey");

describe("Ez Namey (optional)", () => {
    test("must generate a two-word name", () => {
        // Repeat 100 times due to randomness
        for (let i = 0; i < 100; i++) {
            expect(randomStartupName()).toMatch(/[a-zA-Z]+ [a-zA-Z]+/);
        }
    });

    test("must generate random names", () => {
        const uniqueStartupNames = [];

        // Repeat 100 times due to randomness
        for (let i = 0; i < 100; i++) {
            const startupName = randomStartupName();
            if (!uniqueStartupNames.includes(startupName)) {
                uniqueStartupNames.push(startupName);
            }
        }

        expect(uniqueStartupNames.length).toBeGreaterThan(1);
    });
});