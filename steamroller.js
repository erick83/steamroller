/*
 * Flatten a nested array. You must account for varying levels of nesting
 */

function steamrollArray(arr) {
  var resp = [],
    i = 0,
    len = arr.length;
  
  for (i; i < len; i++) {
    if (Array.isArray(arr[i])) {
      resp = resp.concat(steamrollArray(arr[i]));
    } else {
      resp.push(arr[i]);
    }
  }
  return resp;
}

steamrollArray([1, [2], [3, [4]]]);