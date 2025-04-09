function factorial(n) {
    // 여기에 코드를 작성해 주세요
    let result = 1;
    if (n === 0) return 1;
    for (let index = 1; index <= n; index++) {
      result = result * index;
    }
    console.log(result);
    return result;
  }
  factorial(5); // 120
  factorial(0); // 1
  factorial(3); // 6
  