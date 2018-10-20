import Comparator from "../Comparator";

export default function bubbleSort (array) {
    const comparator = new Comparator();

    let len = array.length;
    do {
        var flag = 0;
        for (let i = 0; i < len - 1; i++) {
            // if (array[i] > array[i + 1]) {
            if (comparator.greaterThan(array[i], array[i + 1])) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                flag = i + 1;
            }
        }
        len = flag;
    } while (flag > 0)
    return array;
};

export function bubbleSortWithCustomComparator (array, compareFunction) {
    const comparator = new Comparator(compareFunction);

    let len = array.length;
    do {
        var flag = 0;
        for (let i = 0; i < len - 1; i++) {
            // if (array[i] > array[i + 1]) {
            if (comparator.greaterThan(array[i], array[i + 1])) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                flag = i + 1;
            }
        }
        len = flag;
    } while (flag > 0)
    return array;
};