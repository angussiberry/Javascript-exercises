/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""

    Ok lets go again -> Scan along i, if character the same check case, if succesful, create new array from i+2 onwards, repeat until i reaches length of original  
*/

function checkCharUpper(letter) {
    return letter == letter.toUpperCase();
};

function react(sequence) {
    newString = `${sequence}`
    lowerCase = sequence.split("")
    og = lowerCase.map((x) => x)
    arr = newString.toUpperCase().split("")
    sol = [] 
    t=1
    a = sequence.length
for (i = 1; i < a; i++) {
        console.log(og)
        if (arr[i-1] == arr[i] && checkCharUpper(og[i - 1]) == true && checkCharUpper(og[i]) == false){
            og.splice(i-1,1)
            arr.splice(i-1,1)
            og.splice(i-1,1)
            arr.splice(i-1,1)
            i = 0
            console.log('it in 1')
            a -= 2
            continue
        } else if (arr[i-1] == arr[i] && checkCharUpper(og[i - 1]) == false && checkCharUpper(og[i]) == true){
            og.splice(i-1,1)
            arr.splice(i-1,1)
            og.splice(i-1,1)
            arr.splice(i-1,1)
            i = 0
            console.log('its in 2')
            a -= 2
            continue
        }
    }
    return og.join("")
}

console.log(react("EaAbBCceDdFGfg"))