export const squareRoot = (num, precision) => {
    let i = 1,
        j = -1;
        
    const searchRecursive = (decimal, low, high) => {
            
        // let isSmaller = false;
        if (decimal != -1) {
            i = i * 10;
        } else {
            decimal = 0;
        } 
        j++;

        while (low <= high) {
            let mid = low + ((high - low) >> 1);
            let temp = decimal + mid / i;
            let square = temp * temp;
            if (square == num) {
                return temp;
            } else if (square < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
                // isSmaller = true;
            }
        }

        // decimal = isSmaller ? decimal + high / i : decimal + (low - 1) / i;
        decimal = decimal + high / i;
        return j == precision + 1 || j > 20 ? decimal : searchRecursive(decimal, 0, 9);
    
    };
    return parseFloat(searchRecursive(-1, 0, Math.floor(num)).toFixed(precision));
};


export const squareRootAnother = (decimal, precision) => {
    let integer = decimal * Math.pow(10, (precision + 1) * 2);
    const searchRecursive = (integer, low, high) => {
        if (low > high) {
            return high;
        }
        let mid = low + ((high - low) >> 1);
        let square = mid * mid;
        if (square == integer) {
            return mid;
        } else if (square < integer) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        return searchRecursive(integer, low, high);
    };
    let ceiling;
    if (decimal >= 1) {
        ceiling = decimal * Math.pow(10, (precision + 1));
    } else {
        ceiling = integer;
    }
    
    return parseFloat((searchRecursive(integer, 0, ceiling) / Math.pow(10, precision + 1)).toFixed(precision));
};