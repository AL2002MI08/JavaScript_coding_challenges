// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

// Example
// Input:
// List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//        ]

// Output:
// 'Vatsan took his dog for a spin'

const sentence = arrayOfObjects => arrayOfObjects.map(i => Object.entries(i)[0]).sort(([a], [b]) => a - b).map(([_, e]) =>e).join(" ");
// or
// const sentence = list =>
//     list
//       .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
//       .map(item => Object.values(item)[0])
//       .join(' ')