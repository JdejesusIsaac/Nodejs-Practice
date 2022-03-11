const path = require('path')

/// platform specific seprator
console.log(path.sep)
//output: /


// filePath
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
// output: /content/subfolder/test.txt

//last file on extension
const base = path.basename(filePath)
console.log(base)
// output: test.txt


// gets full path ex
const Absresolve = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(Absresolve);
// output: /Users/angelicacolon/Desktop/untitled folder/Tutorial/content/subfolder/test.txt