import Comparator from "../Comparator";

let shellSort;
export default shellSort = (array) => {
    const comparator = new Comparator();

    const len = array.length;
    let gap = 1;

    do {
        gap = gap * 3 + 1;
    } while (gap < len);

    do {
        for (let i = gap; i < len; i++) {
            let temp = array[i];
            let j = i - gap;
            for (; j > -1 && comparator.lessThan(temp, array[j]); j -= gap) {
                array[j + gap] = array[j];
            }
            array[j + gap] = temp;
        }
        gap = Math.floor(gap / 3);

    } while (gap > 0);

    return array;
};

export const shellSortWithCustomComparator = (array, compareFunction) => {
    const comparator = new Comparator(compareFunction);

    const len = array.length;
    let gap = 1;

    do {
        gap = gap * 3 + 1;
    } while (gap < len);

    do {
        for (let i = gap; i < len; i++) {
            let temp = array[i];
            let j = i - gap;
            for (; j > -1 && comparator.lessThan(temp, array[j]); j -= gap) {
                array[j + gap] = array[j];
            }
            array[j + gap] = temp;
        }
        gap = Math.floor(gap / 3);

    } while (gap > 0);

    return array;
};