module.exports = function toReadable(number) {
  const num = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  let rDivision = 0;
  let sub = 0;
  let numSlice = 0;

  if (number < 20) {
    return `${num[number]}`;
  }

  if (number >= 20 && number < 100) {
    if (number % 10 === 0) {
      return `${num[number]}`;
    }

    rDivision = number % 10;
    sub = number - rDivision;

    return `${num[sub]} ${num[rDivision]}`;
  }

  if (number >= 100 && number < 1000) {
    if (number % 100 === 0) {
      numSlice = +String(number).slice(0, 1);
      return `${num[numSlice]} hundred`;
    }

    numSlice = +String(number).slice(0, 1);
    rDivision = number % 10;
    sub = (number % 100) - rDivision;

    if (sub === 0) {
      return `${num[numSlice]} hundred ${num[rDivision]}`;
    } else if (rDivision === 0) {
      return `${num[numSlice]} hundred ${num[sub]}`;
    } else if (number % 100 < 20) {
      return `${num[numSlice]} hundred ${num[rDivision + sub]}`;
    }

    return `${num[numSlice]} hundred ${num[sub]} ${num[rDivision]}`;
  }
}
