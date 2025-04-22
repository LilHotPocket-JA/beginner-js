function showAllTypes() {
  /* Create a function that outputs the typeof for:
  objects, arrays, strings, numbers, booleans, null, undefined, and NaN It should return an object containing all these types */
  return {
    object : typeof {},
    array : typeof [],
    strings : typeof "this is a string",
    numbers: typeof 5,
    boolean : typeof false,
    null : typeof null,
    undefined : typeof undefined,
    nan : typeof NaN
  }

}

module.exports = showAllTypes;
