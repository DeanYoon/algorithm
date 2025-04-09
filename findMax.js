function findMax(arr) {
    // 여기에 코드를 작성해 주세요
    let maxNum = arr[0];
    arr.forEach((element) => {
      if (maxNum < element) {
        maxNum = element;
      }
    });
  
    console.log(maxNum);
  }
  
  findMax([1, 5, 3, 9, 2]); // 9
  findMax([-1, -5, -3, -9, -2]); // -1
  findMax([]);
  console.log("done");
  