function countZeroes(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middleIdx = Math.floor((low + high) / 2);
    let middleVal = arr[middleIdx];

    if (arr[low] === 0) {
      return arr.length - low;
    } else if (middleVal === 0 && arr[middleIdx - 1] === 1) {
      return arr.length - middleIdx;
    } else if (
      middleVal === 0 &&
      arr[middleIdx - 1] === 0 &&
      arr[middleIdx - 2] === 1
    ) {
      return arr.length - (middleIdx - 1);
    } else if (middleVal === 0 && arr[middleIdx - 1] === 0) {
      low = middleIdx - 1;
    } else if (middleVal !== 0) {
      low = middleIdx + 1;
    } else {
      return arr.length - low;
    }
  }
  return 0;
}

module.exports = countZeroes;
