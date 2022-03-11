const { readFileSync, writeFileSync } = require('fs') ///fs helps us import files from anywhere in folder achitecture

// helps us readfiles from other folders 

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


//create file from scratch in content folder with 
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'}
            
)

console.log(first, second)