function sort (originalArray) {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    for (let i = 1; i < array.length; i += 1) {
        swapped = false;

        for (let j = 0; j < array.length - i; j += 1) {

            // Swap elements if they are in wrong order.
            if (array[j + 1] < array[j]) {
                const tmp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = tmp;

                // Register the swap.
                swapped = true;
            }
        }

        console.log(array);
        // If there were no swaps then array is already sorted and there is
        // no need to proceed.
        if (!swapped) {
            return array;
        }
    }

    return array;
}

sort([15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19]);