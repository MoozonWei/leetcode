/**
 * 
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    const length = numbers.length;
    let [left, right] = [0, length-1];
    while(left <= right) {
        const mid = left + ((right - left) >> 1);
        if(numbers[mid] === numbers[right]) {
            right--;
        } else if(numbers[mid] > numbers[right]) {
            left = mid+1;
        } else if(numbers[mid] < numbers[right]) {
            right = mid;
        }
    }
    return numbers[left];
};