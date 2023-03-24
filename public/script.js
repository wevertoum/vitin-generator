const characterMap = {
  A: "𝜕",
  B: "b",
  C: "匚",
  D: "ᗪ",
  E: "乇",
  F: "f",
  G: "𝖌",
  H: "卄",
  I: "ᓰ",
  J: "j",
  K: "K",
  L: "ᒪ",
  M: "ᗰ",
  N: "n",
  O: "ㄖ",
  P: "ᖘ",
  Q: "q",
  R: "ᖇ",
  S: "s",
  T: "七",
  U: "𐒜",
  V: "ᐺ",
  W: "ɯ",
  X: "ㄨ",
  Y: "y",
  Z: "z",
};

function convertText(text) {
  const convertedText = text.replace(/[A-Za-z]/g, function (match) {
    return characterMap[match.toUpperCase()] || match;
  });

  return convertedText;
}

const inputText = document.getElementById("input-text");
const output = document.getElementById("output");
const generateButton = document.getElementById("generate-button");
const copyButton = document.getElementById("copy-button");

generateButton.addEventListener("click", function () {
  const convertedText = convertText(inputText.value);
  output.textContent = convertedText;
});

copyButton.addEventListener("click", function () {
  const range = document.createRange();
  range.selectNode(output);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Texto copiado para área de transferência!");
});
