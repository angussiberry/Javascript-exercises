/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function checkCharUpper(letter) {
    return letter == letter.toUpperCase();
};

function react(sequence) {
    og = sequence
    arr = sequence.toUpperCase().split("")
    copy = arr.map((x) => x)
    sol = []
    t=1
    for (i = 1; i < sequence.length; i++) {
        if (arr[i-1] === arr[i] && checkCharUpper(sequence[i - 1]) == true && checkCharUpper(sequence[i]) == false){
            i+=2
        } else if  (arr[i-1] === arr[i] && checkCharUpper(sequence[i - 1]) == false && checkCharUpper(sequence[i]) == true){
             i+=2
        } else {
            sol.push(sequence[i-1])
            sol.push(sequence[i])
        }
        console.log(sol)
    }
    return sol.join("")
}

console.log(react("EaAbBCceDdFGfg"))