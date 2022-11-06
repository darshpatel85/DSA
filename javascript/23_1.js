/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const ANY_CHARACTER = ".";

const matchingCharacter = (char, pattern) =>
  char !== null && (char === pattern || pattern === ANY_CHARACTER);

var isMatch = function (s, p) {
  function helper(sIndex, pIndex, previousPattern, withinStar) {
    // Got to the end of both, which means it's a match
    if (sIndex === s.length && pIndex === p.length) {
      return true;
    }

    const char = sIndex === s.length ? null : s[sIndex];
    const pattern = pIndex === p.length ? null : p[pIndex];
    const nextPattern = pIndex < p.length - 1 ? p[pIndex + 1] : null;

    const match = matchingCharacter(char, pattern);
    // If arrived from a previous * match
    if (withinStar) {
      if (matchingCharacter(char, previousPattern)) {
        // We skip on the current character, either by continuing withinStar or not.
        return (
          helper(sIndex + 1, pIndex, previousPattern, true) ||
          helper(sIndex + 1, pIndex, null, false)
        );
      } else if (match) {
        // Match but stop withinStar
        return helper(sIndex + 1, pIndex + 1, null, false);
      } else {
        // If we're withinStar and we don't have a match (either to the previous pattern or the current pattern), we can't continue.
        return false;
      }
    }

    if (match) {
      if (nextPattern === "*") {
        // If we have a match with a star, we can either count it within a star, count it but do not continue with the star, or do not count it at all.
        return (
          helper(sIndex + 1, pIndex + 2, pattern, true) ||
          helper(sIndex + 1, pIndex + 2, pattern, false) ||
          helper(sIndex, pIndex + 2, null, false)
        );
      }

      // Simple match, continue one character each.
      return helper(sIndex + 1, pIndex + 1, null, false);
    } else {
      if (nextPattern === "*") {
        // if we don't have a match but we have a star, just skip over the star.
        return helper(sIndex, pIndex + 2, null, false);
      }

      return false;
    }
  }

  return helper(0, 0, null, false);
};



// Not done by me
console.log(isMatch('aababc','a*.*x'));