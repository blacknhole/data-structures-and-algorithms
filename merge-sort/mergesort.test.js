import mergeSort, { mergeSortWithCustomComparator } from "./mergesort";
import { SortTester } from '../SortTester';

describe('mergeSort', () => {
    test('should sort array', () => {
        SortTester.testSort(mergeSort);
    });

    test('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(mergeSort);
    });

    test('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(mergeSortWithCustomComparator);
    });

    test('should do stable sorting', () => {
        SortTester.testSortStability(mergeSortWithCustomComparator);
    });

});