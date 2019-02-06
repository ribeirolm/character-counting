var finalResult = {};

function countLetters(str){
  str = str.replace(/\s/g, "");
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
      if (finalResult[letter]) {
        finalResult[letter].push(i);
      } else {
        finalResult[letter] = [i];
      }
  }

  return finalResult;
 }

console.log(countLetters("lighthouse labs"));