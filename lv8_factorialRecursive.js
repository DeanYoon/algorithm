function factorialRecursive(n) {
    // 여기에 코드를 작성해 주세요
  
    if (n === 0) {
      return 1;
    }
  
    return factorialRecursive(n - 1) * n;
  }
  
  console.log(factorialRecursive(5)); // 120
  console.log(factorialRecursive(3)); // 6
  console.log(factorialRecursive(1)); // 1
  console.log(factorialRecursive(0)); // 1
  


  home
   