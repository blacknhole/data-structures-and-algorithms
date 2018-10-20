import shellSort, { shellSortWithCustomComparator } from "./shellsort";
import { SortTester } from '../SortTester';

describe('shellSort', () => {
    test('should sort array', () => {
        SortTester.testSort(shellSort);
    });

    test('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(shellSort);
    });

    test('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(shellSortWithCustomComparator);
    });

    test('should do stable sorting', () => {
        SortTester.testSortStability(shellSortWithCustomComparator);
    });

});