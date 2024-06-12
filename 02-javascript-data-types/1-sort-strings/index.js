/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const params = {
  asc: 1,
  desc: -1
};

export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr];

  newArr.sort((a, b) => {
    return params[param] * a.localeCompare(b, ['ru', 'en'], {
      caseFirst: 'upper',
    });
  });

  return newArr;
}
