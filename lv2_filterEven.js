function filterEvenNumbers(arr) {
    const resultArr = [];
  
    arr.forEach((element) => {
      if (element % 2 == 0) {
        resultArr.push(element);
      }
    });
  
    console.log(resultArr);
  }
  filterEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
  filterEvenNumbers([11, 22, 33, 44, 55]); // [22, 44]
  filterEvenNumbers([]);
  