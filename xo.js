// Goal:
// Check if x and o's are the same

// Cases:
// If Goal is Met return true
// Otherwise return false
// If there are no x's and o's return true

// Steps:
// count how many x and os
// compare the amount of x's and o's
// if those are equal return true
// else we return false
// if x and o count are 0 we return true

function XO(xoString) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < xoString.length; i++) {
    if (xoString[i].toLowerCase() === "x") {
      xCount += 1;
    }
    if (xoString[i].toLowerCase() === "o") {
      oCount += 1;
    }
  }
  if (xCount === 0 && oCount === 0) {
    return true;
  }
  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("XoX"));
