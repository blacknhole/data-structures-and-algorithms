import insertionSort, { insertionSortWithCustomComparator } from "./insertionsort";
import { SortTester } from '../SortTester';

describe('insertionSort', () => {
    it('should sort array', () => {
        SortTester.testSort(insertionSort);
    });

    it('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(insertionSortWithCustomComparator);
    });

    it('should do stable sorting', () => {
        SortTester.testSortStability(insertionSortWithCustomComparator);
    });

    it('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(insertionSort);
    });

});