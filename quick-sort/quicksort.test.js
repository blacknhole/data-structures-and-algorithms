import quickSort, { quickSortWithCustomComparator } from "./quicksort";
import { SortTester } from '../SortTester';

describe('quickSort', () => {
    test('should sort array', () => {
        SortTester.testSort(quickSort);
    });

    test('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(quickSort);
    });

    test('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(quickSortWithCustomComparator);
    });

    // test('should do stable sorting', () => {
    //     SortTester.testSortStability(quickSortWithCustomComparator);
    // });

});