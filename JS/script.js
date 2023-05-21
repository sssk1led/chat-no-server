//по поводу работы писать на почту sssk1led@gmail.com или звонить по номеру +79581803363 Санкт-Петербург

let num = Number(0)
let kol = []
let usname = String()
let message = String()

alert('its like a chat in which only you can write, since Im a frontend developer and did not connect it to the server :)')

document.querySelector('#input').addEventListener('keydown', (key) => {
    if (key.key == 'Enter'){
        send()
    }
})

function send(){
    usname = document.querySelector('#usname').value
    message = document.querySelector('#input').value
    if (usname == ''){
        usname = prompt('write your user name!')
    }else if (message == ''){
        alert('write message!')
    }else{
        num++
        document.querySelector('#box').innerHTML += `<div class='mes' id='${num}' onclick='select(${num})'> &nbsp;${usname}: ${message}</div>`
        document.querySelector('#input').value = ''
    }
}

function select(num){
    if (document.getElementById(num).className == 'delmes'){
        document.getElementById(num).className = 'mes'
        kol.pop(num)
    }else if(document.getElementById(num).className == 'mes'){
        document.getElementById(num).className = 'delmes'
        kol.push(num)
    }
    console.log(`you selected messages: ${kol}`)
}

function clearHeap(){
    kol.forEach(element => {
        document.getElementById(element).innerHTML = ''
    });
    kol = []
}