//Given a non-empty string like "Code" return a string like "CCoCodCode".

//string_splosion('Code') → 'CCoCodCode'
//string_splosion('abc') → 'aababc'
//string_splosion('ab') → 'aab'

function stringSplosion(str){
    let counter = 0, output = "";

    while(counter < str.length) {

        for(let i = 0 ; i <= counter; i++) {
            output += str[i];
        }
        counter ++;
    }

    return output;
}

// console.log(stringSplosion('def'));

//Have the function LongestWord(sen) take the sen parameter being passed and 
//return the longest word in the string. If there are two or more words that 
//are the same length, return the first word from the string with that length. 
//Ignore punctuation and assume sen will not be empty. Words may also contain 
//numbers, for example "Hello world123 567"

function LongestWord1(sen) { 

    const senArray = sen.match(/[a-z0-9]+/gi);
    let longest = senArray[0];
    let longestLength = senArray[0].length;
    
    for (let i = 1; i < senArray.length; i++) {
      let currLength = senArray[i].length;
      if(currLength > longestLength) {
        longest = senArray[i];
        longestLength = currLength;
      }
    }
  
    return longest;
  }

  function LongestWord2 (sen) {
      let senArray = sen.match(/[a-z0-9]+/gi);
        senArray = senArray.sort(function(a, b) { return a.length - b.length; });
        return senArray[senArray.length -1];
  }

//There is a string, , of lowercase English letters that is repeated infinitely
// many times. Given an integer, , find and print the number of letter a's in
// the first  letters of the infinite string.
//s = 'abcac' , n=10   output should be 4.

//For below function we got below error for input:
//s = 'a' , n= 1000000000000
//Time limit exceeded
//Your code did not execute within the time limits. Please optimize your code. 

  function repeatedString(s, n) {
    if (s.length == n) {
        return countA(s);
    }

    let count = 0;

    while(s.length < n) {
        s += s[count];
        if(count == s.length - 1) {
            count = 0;
        } else {
            count++;
        }
    }

    return countA(s);

  }

  function countA(s) {
      let count = 0;
      for(let i = 0; i < s.length; i++){
          if(s[i] == 'a') {
            count++
          }
      }
      return count;
  }

  function repeatedString2(s, n) {

      let aCount = getACount(s);
      if (aCount == 0) {
          return aCount;
      }
      const subSCount = parseInt(n / s.length);
      const subSRem = n % s.length;
      aCount = aCount * subSCount + getACount(s.substring(0, subSRem))
      return aCount;
  }

  function getACount(s) {
      return (s.split('a')).length - 1;
      // OR return (s.match(/a/g) || []).length;
  }