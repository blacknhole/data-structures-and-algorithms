import Comparator from "../Comparator";

let selectionSort;
export default selectionSort = (array) => {
    const comparator = new Comparator();

    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (comparator.lessThan(array[j], array[min])) {
                min = j;
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array;
};

export const selectionSortWithCustomComparator = (array, compareFunction) => {
    const comparator = new Comparator(compareFunction);

    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (comparator.lessThan(array[j], array[min])) {
                min = j;
            }
        }
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array;
};