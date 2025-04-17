function linearSearch(arr, target) {
    // 여기에 코드를 작성해 주세요
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  }
  
  console.log(linearSearch([3, 5, 1, 8, 9], 5)); // true