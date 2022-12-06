/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    input = text.split("")
    copy = input.map((x) => x)
    for(i=0; i<n; i++){
        let char2pusher = []
        let char1pusher = []
        for (j=0; j<text.length; j++){
            if (j % 2 == 0){
                char2pusher.push(copy[j])
            }
            if (j % 2 !== 0){
                char1pusher.push(copy[j])
            }

        }
    copy = char1pusher.concat(char2pusher)
    }
    return copy.join("")
}




/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    input = cipherText.split("")
    copy = input.map((x) => x)
    l = input.length
    if (l % 2 !== 0){ 
        l -= 1 
    }
    for (j=0;j<n;j++){


        left = copy.slice(0,l/2)
        var edit = left.map((x) => x)
        right = copy.slice(l/2)
        console.log(right)
        console.log(left)
        let t = 0
        
        for(i=0;i<l+1;i++){
            edit.splice(i,0,right[t])
            i++
            t++
            console.log(edit)
            }

    copy = edit.map((x) => x)
    }
    return copy.join("")
}
 
console.log(decrypt("hsi  etTi sats!",1))