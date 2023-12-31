const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const width = 9

console.log(squares)
let currentIndex = 7

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')

    switch (e.key) {
        case 'ArrowLeft':
            if (currentIndex % width !== 0) {
                currentIndex -= 1
            }
            break
        case 'ArrowRight':
            if (currentIndex % width + 1 !== width) {
                currentIndex += 1
            }
            break
        case 'ArrowUp':
            if (currentIndex > width) {
                currentIndex -= width
            }
            break
            case 'ArrowDown':
                if (currentIndex < squares.length - width) {
                    currentIndex += width
                }
            break
    }

    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)

function autoMoveLogs (){
    logsLeft.forEach(logLeft=> moveLogLeft(logLeft))
    logsRight.forEach(logRight=> moveLogRight(logRight))
}

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains('l1') :
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2') :
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3') :
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4') :
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5') :
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}

function moveLogRight(logRight) {
    switch(true) {
        case logRight.classList.contains('l1') :
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l2') :
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
        case logRight.classList.contains('l3') :
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l4') :
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
        case logRight.classList.contains('l5') :
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
    }
}

setInterval(autoMoveLogs, 1000)