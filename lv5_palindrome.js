function isPalindrome(str) {
    // 여기에 코드를 작성해 주세요
    if (str.length <= 1) {
      return true;
    }
    let result = str;
    if (result[0] !== result[result.length - 1]) {
      return false;
    } else {
      result = str.slice(1, result.length - 1);
  
      return isPalindrome(result);
    }
  }
  
  isPalindrome("racecar"); // true
  isPalindrome("hello"); // false
  isPalindrome("level"); // true
  