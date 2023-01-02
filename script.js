function isPalindrome() {
  var input = document.getElementById("inp1").value;
  var reg = /[^a-z0-9]/g;
  var smallStr = input.toLowerCase().replace(reg, "");
  var reversed = smallStr.split("").reverse().join("");
  if (reversed === smallStr) {
    document.getElementById("txtArea").innerHTML = "It's Palindrome";
  } else {
    document.getElementById("txtArea").innerHTML = "It's not palindrome";
  }
}
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", isPalindrome);
