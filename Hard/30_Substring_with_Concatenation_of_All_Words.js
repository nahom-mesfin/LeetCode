/**
 * LeetCode 30: Substring with Concatenation of All Words
 *
 * You are given a string s and an array of strings words.
 * Return all starting indices of substrings in s that are
 * a concatenation of each word in words exactly once.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s.length || !words.length) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    const result = [];
    const freqMap = {};

    // Build frequency map of words
    for (let word of words) {
        freqMap[word] = (freqMap[word] || 0) + 1;
    }

    // We loop wordLen times to cover all alignments
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let count = 0;
        let windowMap = {};

        while (right + wordLen <= s.length) {
            let word = s.substring(right, right + wordLen);
            right += wordLen;

            if (freqMap[word]) {
                windowMap[word] = (windowMap[word] || 0) + 1;
                count++;

                // If word occurs more than allowed, shrink window
                while (windowMap[word] > freqMap[word]) {
                    let leftWord = s.substring(left, left + wordLen);
                    windowMap[leftWord]--;
                    left += wordLen;
                    count--;
                }

                // If valid window found
                if (count === wordCount) {
                    result.push(left);
                }
            } else {
                // Reset window if word not in words
                windowMap = {};
                count = 0;
                left = right;
            }
        }
    }

    return result;
};
