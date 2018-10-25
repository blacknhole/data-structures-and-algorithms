import Comparator from "../Comparator";

const merge = (array, p, q, r, comparator) => {

    let temp = [],
        i = p,
        j = q + 1;

    while (i <= q && j <= r) {
        // if (comparator.lessThanOrEqual(array[i], array[j])) {
        //     temp.push(array[i++]);
        // } else {
        //     temp.push(array[j++]);
        // }
        comparator.lessThanOrEqual(array[i], array[j])
            ? temp.push(array[i++])
            : temp.push(array[j++]);
    }

    temp = i > q ? temp.concat(array.slice(j, r + 1)) : temp.concat(array.slice(i, q + 1));
    // i > q ? temp.push(...array.slice(j, r + 1)) : temp.push(...array.slice(i, q + 1));

    array.splice(p, r - p + 1, ...temp);
};

const sortRecursive = (arr, p, r, comparator) => {
    if (p >= r) return;

    let q = (p + r) >> 1;
    sortRecursive(arr, p, q, comparator);
    sortRecursive(arr, q + 1, r, comparator);

    merge(arr, p, q, r, comparator);
};

let mergeSort;
export default mergeSort = (array) => {
    const comparator = new Comparator();
    let len = array.length;

    sortRecursive(array, 0, len - 1, comparator);
    return array;

};

export const mergeSortWithCustomComparator = (array, compareFunction) => {
    const comparator = new Comparator(compareFunction);
    let len = array.length;
    sortRecursive(array, 0, len - 1, comparator);
    return array;
};

// export const mergeSortWithCustomComparator = (array, compareFunction) => {
//     const comparator = new Comparator(compareFunction);
    
//     let len = array.length;

//     const merge = (array, p, q, r) => {
//         let temp = [],
//             i = p,
//             j = q + 1;

//         while (i <= p && j <= r) {
//             // if (comparator.lessThanOrEqual(array[i], array[j])) {
//             //     temp.push(array[i++]);
//             // } else {
//             //     temp.push(array[j++]);
//             // }
//             comparator.lessThanOrEqual(array[i], array[j])
//                 ? temp.push(array[i++])
//                 : temp.push(array[j++]);
//         }

//         i > p ? temp.concat(array.slice(j, r + 1)) : temp.concat(array.slice(i, p + 1));

//         array.splice(p, r - p + 1, ...temp);
//     }

//     const sortRecursive = (arr, p, r) => {
//         if (p >= r) return;

//         let q = (p + r) >> 1;
//         sortRecursive(arr, p, q);
//         sortRecursive(arr, q + 1, r);

//         merge(arr, p, q, r);
//     };

//     sortRecursive(array, 0, len - 1);

// };