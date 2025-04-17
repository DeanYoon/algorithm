function binarySearch(arr, target) {
    if (arr.length === 0) return false; // 배열이 비었으면 찾을 수 없으니 바로 false
    const midNum = Math.floor(arr.length / 2);
    const mid = arr[midNum];
    if (mid === target) return true;
  
    if (mid > target) {
      const newArr = arr.slice(0, midNum);
      return binarySearch(newArr, target);
    } else if (mid < target) {
      const newArr = arr.slice(midNum + 1, arr.length);
      return binarySearch(newArr, target);
    } else {
      return false;
    }
  }
  
  const result = binarySearch([10, 20, 30, 40], 5); // true
  