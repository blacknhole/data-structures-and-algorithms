import bubleSort from "./bublesort";

test('test sorting', () => {
    expect(bubleSort([9, 3, 5, 2, 6, 3, 7])).toEqual([2, 3, 3, 5, 6, 7, 9]);
});