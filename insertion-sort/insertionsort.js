import Comparator from "../Comparator";

let insertionSort;
export default insertionSort = (array) => {
    const comparator = new Comparator();

    let len = array.length;
    for (let i = 1; i < len; i++) {
        let temp = array[i];
        let j = i - 1;
        for (; j > -1 && comparator.lessThan(temp, array[j]); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
};

export const insertionSortWithCustomComparator = (array, compareFunction) => {
    const comparator = new Comparator(compareFunction);

    let len = array.length;
    for (let i = 1; i < len; i++) {
        let temp = array[i];
        let j = i - 1
        for (; j > -1 && comparator.lessThan(temp, array[j]); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
};