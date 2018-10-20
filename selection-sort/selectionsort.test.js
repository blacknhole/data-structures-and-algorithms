import selectionSort, { selectionSortWithCustomComparator } from "./selectionsort";
import { SortTester } from '../SortTester';

describe('selectionSort', () => {
    test('should sort array', () => {
        SortTester.testSort(selectionSort);
    });
    
    test('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(selectionSort);
    });
    
    test('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(selectionSortWithCustomComparator);
    });
    
    // test('should do stable sorting', () => {
    //     SortTester.testSortStability(selectionSortWithCustomComparator);
    // });

});