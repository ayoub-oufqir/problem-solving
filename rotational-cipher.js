// problem URL: https://exercism.org/tracks/javascript/exercises/rotational-cipher

// ### Problem ###
// Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.

// The Caesar cipher is a simple shift cipher that relies on transposing all the letters in the alphabet using an integer key between 0 and 26. Using a key of 0 or 26 will always yield the same output due to modular arithmetic. The letter is shifted for as many values as the value of the key.

// The general notation for rotational ciphers is ROT + <key>. The most commonly used rotational cipher is ROT13.

// A ROT13 on the Latin alphabet would be as follows:

// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: nopqrstuvwxyzabcdefghijklm

const rotate = (str, rot) => {
  let resStr = "";
  let strArray = str.split("");
  strArray.forEach((element, index) => {
    let asciiCode = element.charCodeAt(0);
    if(asciiCode===32){
      resStr+=" ";
    }else if(65<=asciiCode && asciiCode<=90){
      if((asciiCode+rot)<=90){
        resStr+=String.fromCharCode(asciiCode+rot)
      }else{
        resStr+=String.fromCharCode(asciiCode+rot-26)
      }
    }else if(97<=asciiCode && asciiCode<=122){
      if((asciiCode+rot)<=122){
        resStr+=String.fromCharCode(asciiCode+rot)
      }else{
        resStr+=String.fromCharCode(asciiCode+rot-26)
      }
    }else{
      resStr+=element;
    }
  });
  return resStr;
};


console.log(rotate('The quick brown fox jumps over the lazy dog.', 13))