/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"

    Ok so look for vowels, make copy of array out - if vowel in array - get index - if firstIndex[vowel] != lastIndex[vowel],
    first = out[first], last = out[last] then out[first] = last to swap them and change vowel in original array with 'x'
*/

function vowelsOnly(str) {
    return  str.match(/[aeiou]/ig, ''); //Regexp function to find vowels, if the sting matches, add to array  (i=case sensitive, g = global so look for all instances)
    }
    
function reverseVowels(reverseMe) {
    vowels = vowelsOnly(reverseMe) //call regex function with input string
    rev = vowels.map((x) => x).reverse() //make a copy og the vowels and flip
    copy = reverseMe.split("") //create editable copy of letters in array
    output = copy.map((x) => x) //create a copy of a the array for the output
    for(i=0;i<vowels.lenght ;i++){ //loop over every vowel instance
        index = copy.indexOf(vowels[i]) //find first instance of vowel
        output[index] = rev[i] //assign last vowel in the first vowel position
        copy[index]  = "" //incase of multiple instances in original of the same vowel clear ith vowel in copy
        }
    return output.join('') //create string output and return
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels