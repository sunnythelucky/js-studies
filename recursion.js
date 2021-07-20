function countVowels(str) {
	if (str.length === 0) return 0;
	var first = isVowel(str[0]) ? 1 : 0;
	return first + countVowels(str.slice(1));
}

const isVowel = (char) => ["a", "e", "i", "o", "u"].includes(char);

countVowels("The quick brown fox jumps over the lazy dog");

("use strict");

function isPalindrome(str) {
	if (str.length <= 1) return true;
	var first = str[0];
	var last = str[str.length - 1];
	if (first === last) {
		return isPalindrome(str.substring(1, str.length - 1));
	}
	return false;
}

console.log(isPalindrome("") === true);
console.log(isPalindrome("a") === true);
console.log(isPalindrome("aa") === true);
console.log(isPalindrome("aba") === true);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abccba") === true);

console.log(isPalindrome("ab") === false);
console.log(isPalindrome("abc") === false);
console.log(isPalindrome("abca") === false);
console.log(isPalindrome("abcdba") === false);
