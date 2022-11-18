function palindrome(str) {
    var strvar = str.split('');
    var rStrvar = strvar.reverse();
    var rStr = rStrvar.join('');
    return rStr === str;
  }
  console.log(palindrome("aaaa"));
  console.log(palindrome("aaab"));
  console.log(palindrome("aa aa"));
  console.log(palindrome("a aaa"));
  console.log(palindrome("a,aaa"));