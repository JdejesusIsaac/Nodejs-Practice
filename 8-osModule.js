const os = require('os')

// info about current info
const user = os.userInfo()
console.log(user)

//method returns the system uptime
console.log(`The uptime for this System is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)