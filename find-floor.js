function findFloor(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (val >= arr[right]) {
      return arr[right];
    } else if (arr[mid] >= val && arr[mid - 1] <= val) {
      return arr[mid - 1];
    } else if (val > arr[mid]) {
      left = mid + 1;
    } else if (val < arr[mid]) {
      right = mid - 1;
    }
  }
  return -1;
}

module.exports = findFloor;
