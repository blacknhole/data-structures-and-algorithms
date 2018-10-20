import bubbleSort, { bubbleSortWithCustomComparator } from "./bubblesort";
import {
    // equalArr,
    // notSortedArr,
    // reverseArr,
    // sortedArr,npm
    SortTester,
} from '../SortTester';

describe('BubbleSort', () => {
    it('should sort array', () => {
        SortTester.testSort(bubbleSort);
    });

    it('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(bubbleSortWithCustomComparator);
    });

    it('should do stable sorting', () => {
        SortTester.testSortStability(bubbleSortWithCustomComparator);
    });

    it('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(bubbleSort);
    });

});