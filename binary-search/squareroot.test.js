import { squareRoot, squareRootAnother } from "./squareroot";

describe('squareRoot', () => {
    test('should evaluate the square root using the given number and precision', () => {
        expect(squareRoot(0, 5)).toEqual(0);
        expect(squareRoot(1, 0)).toEqual(1);
        expect(squareRoot(2, 12)).toEqual(1.414213562373);
        expect(squareRoot(987654321, 8)).toEqual(31426.96805293);
        expect(squareRoot(0.000000123, 11)).toEqual(0.00035071356);
        expect(squareRoot(123456.789, 9)).toEqual(351.364182864);
    });
});

describe('squareRootAnother', () => {
    test('should evaluate the square root using the given number and precision', () => {
        expect(squareRootAnother(0, 5)).toEqual(0);
        expect(squareRootAnother(1, 0)).toEqual(1);
        expect(squareRootAnother(2, 6)).toEqual(1.414214);
        // expect(squareRootAnother(987654321, 6)).toEqual(31426.968053);
        // expect(squareRootAnother(0.000000123, 11)).toEqual(0.00035071356);
        // expect(squareRootAnother(123456.789, 9)).toEqual(351.364182864);
    });
});

