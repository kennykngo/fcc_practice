var word = "racecar";
var rword = "";

var letters = word.split("");

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + "is a palindrome.");
} else {
  console.log(word + "is not a palindrome");
}

console.log(rword);
console.log(word);
