function bubbleSort(arr) {
    // 여기에 코드를 작성해 주세요
  
    let isChanged = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const a = arr[i];
      const b = arr[i + 1];
      if (a > b) {
        arr[i] = b;
        arr[i + 1] = a;
        isChanged = true;
      }
    }
    //   console.log(arr);
    isChanged && bubbleSort(arr);
  
    return arr;
  }
  // bubbleSort([5, 3, 8, 4, 2]); // [2, 3, 4, 5, 8]
  bubbleSort([10, -2, 0, 3, 1]); // [-2, 0, 1, 3, 10]
  