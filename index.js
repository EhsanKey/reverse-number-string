const fs = require('fs');
const path = require('path');
const inversNumber = (text) => {
    let reversedText = '';
    let currentNumber = ''
    for(let i = 0; i < text.length; i++) {
        const char = text[i];
        if(/[0-9]/.test(char)) {
            currentNumber += char;
        } else {
            if(currentNumber !== "") {
                const reversedNumber = currentNumber.split('').reverse().join("")
                reversedText += reversedNumber;
                currentNumber = '';
            } 
            reversedText += char;
        }
    }

    return reversedText
}
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const output = inversNumber(input)
fs.writeFileSync("output.txt", output)
