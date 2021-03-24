let sampleString = "pig latin"
let sampleString2 = " pig lating pig latin"

function pigLatin(strings){
    
    let wordsArray = strings.split(' ')
    console.log(wordsArray)
    wordsArray.forEach((word , index) => {
       let lettersArray=  word.split('')
       console.log(lettersArray)
       while(lettersArray[0 !=='a' && lettersArray[0] !=='e' && lettersArray[0] !=='i' && lettersArray[0] !== 'o' && lettersArray[0] !== 'u']) {
       lettersArray.push(lettersArray[0])
       lettersArray.shift()
       console.log(lettersArray)
       }

       lettersArray.push('ay')
       console.log(lettersArray)
       wordsArray[index] = lettersArray.join('')
       console.log(wordsArray)
    
    });

    return wordsArray.join(' ');
}

let pigString = pigLatin(sampleString);
console.log(pigString);