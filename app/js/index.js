const remote = require('electron').remote
const main = remote.require('./main.js')

let button = document.createElement('button')
button.textContent = 'Open file'
button.addEventListener('click',()=>{
main.openWindow()
},false)
document.body.appendChild(button)