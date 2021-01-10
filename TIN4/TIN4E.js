function longWord(str) {
  var strSplit = str.split(' ');
  var longestWord;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i];
     }
  }
  return longestWord;
}
findLongestWord("Luke I am your father");