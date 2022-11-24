/*
    The goal of this exercise is to convert a string to a new string where each character in the new string is "("
    if that character appears only once in the original string, or ")" if that character appears more than once in
    the original string. Ignore capitalization when determining if a character is a duplicate.

    For example:
    "recede"   =>  "()()()"
*/

//simple solution
function duplicateEncode(word){
    word = word.toLowerCase().split("")
    output = []
    for(let i=0; i<word.length; i++){
        if(word.indexOf(word[i]) === i && word.lastIndexOf(word[i]) === i){ //indexOf () finds first instance of of a given element in an array, lastIndexOf finds the last
            output.push("(")
        }else{
            output.push(")")
        }
    }
    return output.join("")
}

//OVERCOMPLICATED -- Sorted in alphabetical order, counted, when count reset allocate all of that letter either ( or )
function duplicateEncode1(word1) {
    let res = ""
    let word = word1.toLowerCase().replace(" ","")
    strarray = word.split("")
    strarray.sort((a, b) => a.localeCompare(b))
    count1=0
    count2=0
    for (i=1;i<=strarray.length; i++){
        if(strarray[i-1] == strarray[i]){
            count1+=1
            count2+=1
        }
        else{
            count1 = 0
        }
        if(count1>=0 && count2>0){
            count2=0
            res +=")"
            const letter2 = new RegExp(`${strarray[i-1]}`, 'gi');
            let word2 = word.replace(letter2,")")
            word = word2
        }
        else if(count1==0 && count2==0){
            res += "("
            const letter2 = new RegExp(`${strarray[i-1]}`, 'gi');
            let word2 = word.replace(letter2,"(")
            word = word2
        }
    }
    console.log(count1,count2)

    return word
    
}


// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.duplicateEncode = duplicateEncode