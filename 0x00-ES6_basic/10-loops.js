export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    const newValue = appendString + value;
    newArray.push(newValue);
  }

  return newArray;
}
