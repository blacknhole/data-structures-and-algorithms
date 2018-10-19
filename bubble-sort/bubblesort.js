export default function bubleSort (array) {
    let len = array.length;
    do {
        var flag = 0;
        for (let i = 0; i < len - 1; i++) {
            if (array[i] > array[i + 1]) {
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