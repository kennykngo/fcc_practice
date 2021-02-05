// avg time of Hash Table is O(1) for Search, Insert, and Delete
// Worst case O(n)
// Collision - When two keys map to the same index of the array

/**
 *
 * @param {string} string - String that we want to hash
 * @param {number} max - Number of bucket's we're going to use to store values
 */

var hash = (string, max) => {
  var hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }

  // if we have 5 buckets, the remainder will be either 0,1,2,3,4
  return hash % max;
};
