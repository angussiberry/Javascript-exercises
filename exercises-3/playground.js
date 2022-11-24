function duplicateEncode(word1) {
    let res = ""
    let word = word1.toLowerCase().replace(" ","")
    strarray = word.split("")
    strarray.sort()
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
            console.log(count1,count2)
            count2=0
            res +=")"
            const letter2 = new RegExp(`${strarray[i-1]}`, 'gi');
            console.log(letter2)
            let word2 = word.replace(letter2,")")
            console.log(word2)
            word = word2
        }
        if(count1==0 && count2==0){
            res += "("
            const letter2 = new RegExp(`${strarray[i-1]}`, 'gi');
            console.log(letter2)
            let word2 = word.replace(letter2,"(")
            word = word2
        }
    }
    console.log(count1,count2)
    console.log(word)

    return word
    
}

a = duplicateEncode("(( @")
console.log(a)