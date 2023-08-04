function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  let left = setLeft(arr, leftIdx, rightIdx, val);
  if (left === -1) {
    return -1;
  }

  let right = setRight(arr, left, rightIdx, val);
  if (right) {
    return right - left + 1;
  }
}

function setLeft(arr, left, right, val) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let midVal = arr[mid];

    if (arr[left] === val) {
      return left;
    } else if (midVal === val && arr[mid - 1] !== val) {
      return mid;
    } else if (midVal === val && arr[mid - 1] === val && arr[mid - 2] !== val) {
      return mid - 1;
    } else if (midVal < val) {
      left = mid + 1;
    } else {
      left = mid - 1;
    }
  }

  return -1;
}

function setRight(arr, left, right, val) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = arr[mid];

    if (arr[right] === val) {
      console.log(left, mid, right);
      return right;
    } else if (midVal === val && arr[mid + 1] !== val) {
      console.log(left, mid, right);
      return mid;
    } else if (val < midVal) {
      console.log(left, mid, right);
      right = mid - 1;
    } else {
      console.log(left, mid, right);
      right = mid + 1;
    }
  }

  return right;
}

module.exports = sortedFrequency;
