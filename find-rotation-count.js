function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[left] <= arr[right]) {
      return left;
    } else if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      return mid;
    } else if (arr[mid] >= arr[left]) {
      left = mid + 1;
    } else if (arr[mid] < arr[right]) {
      right = mid - 1;
    }
  }
}

module.exports = findRotationCount;
