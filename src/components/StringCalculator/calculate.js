export function add(numbers) {
  if (numbers === "") return 0;
  const numberArray = parseNumbers(numbers);
  validateNumbers(numberArray);
  return sumNumbers(numberArray);
}

function parseNumbers(numbers) {
  if (numbers.startsWith("//")) {
    const delimiter = numbers.substring(2, numbers.indexOf("\n"));
    numbers = numbers.substring(numbers.indexOf("\n") + 1);
    numbers = numbers.replace(new RegExp(`\\${delimiter}`, "g"), ",");
  }

  numbers = numbers.replace("\n", ",");

  return numbers.split(",");
}

function validateNumbers(numbers) {
  const negativeNumbers = numbers.filter((num) => parseInt(num) < 0);
  if (negativeNumbers.length > 0) {
    throw new Error("negative numbers not allowed: " + negativeNumbers.join(", "));
  }
}

function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}
