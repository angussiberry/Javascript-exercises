/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"

    Ok so look for vowels, make copy of array out - if vowel in array - get index - if firstIndex[vowel] != lastIndex[vowel],
    first = out[first], last = out[last] then out[first] = last to swap them and change vowel in original array with 'x'
*/



function reverseVowels(reverseMe) {
    vowels = ['a','e','i','o','u']
    out = reverseMe.split("")
    if (vowels in out){
        for(i=0;i<out.length; i++){
            if (out.firstIndexof(vowels) != out.lastIndexOf(vowels)){
                first = out[i-1]
                second = out[i]
                out[i-1] = second
                out[i] = first
            }
        }
    }
    return out
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels