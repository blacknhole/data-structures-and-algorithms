import Comparator from "../Comparator";

const partition = (array, p, r, comparator) => {
    let pivot = array[r],
        i = p,
        j = p,
        temp;
    do {
        if (comparator.lessThanOrEqual(array[j], pivot)) {
            if (j > i) {
                temp = array[i];
                array[i++] = array[j];
                array[j++] = temp;
            } else {
                i++;
                j++;
            }
        } else {
            j++;
        }

    } while (j < r);
    if (i < r) {
        temp = array[i];
        array[i] = array[r];
        array[r] = temp;
    }
    return i;
};

const sortRecursive = (array, p, r, comparator) => {
    if (p >= r) return;
    let pivot = partition(array, p, r, comparator);
    sortRecursive(array, p, pivot - 1, comparator);
    sortRecursive(array, pivot + 1, r, comparator);
};

let quickSort;
export default quickSort = (array) => {
    const comparator = new Comparator();
    sortRecursive(array, 0, array.length - 1, comparator);
    return array;
};

export const quickSortWithCustomComparator = (array, compareFunction) => {
    const comparator = new Comparator(compareFunction);
    sortRecursive(array, 0, array.length - 1, comparator)
    return array;
};