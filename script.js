const extendHex = (shortHex) => {
  // write your code here
	const hexWithoutHash=shortHex.replace(/^#/,"");
	if(hexWithoutHash.length!==3){
		throw new Error("Invalid short hex code.It must have 3 characters.");
	}
	const chars = hexWithoutHash.split("");
	const fullHex = "#" + chars.map((char) => char.repeat(2)).join("");

  return fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));


