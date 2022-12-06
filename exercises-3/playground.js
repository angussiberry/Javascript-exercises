/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"

    Ok so look for vowels, make copy of array out - if vowel in array - get index - if firstIndex[vowel] != lastIndex[vowel],
    first = out[first], last = out[last] then out[first] = last to swap them and change vowel in original array with 'x'
*/

function vowelsOnly(str) {
    return  str.match(/[aeiou]/ig, '');
    }
    
function reverseVowels(reverseMe) {
    vowels = vowelsOnly(reverseMe)
    console.log(vowels)
    rev = vowels.map((x) => x).reverse()
    console.log(rev)
    out = reverseMe.split("")
    co = out.map((x) => x)
    numberVowels = vowels.length
    for(i=0;i<numberVowels ;i++){
        index = out.indexOf(vowels[i])
        co[index] = rev[i] 
        out[index]  = ""
        }
    return co.join('')
}
console.log(reverseVowels("Hello!"))
console.log(reverseVowels("Reverse Vowels In A String"))
