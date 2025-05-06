function reverseString(str) {
  /* take a string as input and return it reversed Example: "hello" -> "olleh" */
  let rev = "";
  
  for(i = 0; i < str.length; i++){

     rev += str.charAt(i-1);
  }

  return rev;
}


module.exports = reverseString;
