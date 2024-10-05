function cipher(str, key) {
  let arr = str.toLowerCase().split("");
  let ci = [];
  let cAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  arr.forEach((c) => {
    if (c === " ") {
      ci.push(c);
    } else {
      ci.push(cAlphabet[((c.charCodeAt(0) + key) % 97) % 26]);
    }
  });
  return ci.join("");
}

 module.exports = cipher;
