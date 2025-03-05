let firstBlurOn = document.getElementById('first-blur-on')
let firstBlurOff = document.getElementById('first-blur-off')
let firstImage = document.getElementById('first-image')

let secondBlurOn = document.getElementById('second-blur-on')
let secondBlurOff = document.getElementById('second-blur-off')
let secondImage = document.getElementById('second-image')

let thirdBlurOn = document.getElementById('third-blur-on')
let thirdBlurOff = document.getElementById('third-blur-off')
let thirdImage = document.getElementById('third-image')

let fourthBlurOn = document.getElementById('fourth-blur-on')
let fourthBlurOff = document.getElementById('fourth-blur-off')
let fourthImage = document.getElementById('fourth-image')

let fifthBlurOn = document.getElementById('fifth-blur-on')
let fifthBlurOff = document.getElementById('fifth-blur-off')
let fifthImage = document.getElementById('fifth-image')

let blurArray = [
    [firstBlurOn, firstBlurOff],
    [secondBlurOn, secondBlurOff],
    [thirdBlurOn, thirdBlurOff],
    [fourthBlurOn, fourthBlurOff],
    [fifthBlurOn, fifthBlurOff]
]

let blurState = 'blurred'

const blurClick = (blurOn, blurOff, image) => {
    if (blurState === 'blurred') {
        blurOn.style.transition = 'opacity 200ms ease-in-out'
        blurOn.style.opacity = '1'
        blurOff.style.transition = 'opacity 200ms ease-in-out'
        blurOff.style.opacity = '0'
        image.style.transition = 'filter 200ms ease-in-out'
        image.style.filter = 'blur(0px)'
        blurState = 'unblurred'
    } else if (blurState === 'unblurred') {
        blurOn.style.transition = 'opacity 200ms ease-in-out'
        blurOn.style.opacity = '0'
        blurOff.style.transition = 'opacity 200ms eaes-in-out'
        blurOff.style.opacity = '1'
        image.style.transition = 'filter 200ms ease-in-out'
        image.style.filter = 'blur(20px)'
        blurState = 'blurred'
    }
}

blurArray.forEach((numberArray, index) => {
    if (index === 0) {
        numberArray.forEach(item => {
            item.addEventListener('click', () => {
                blurClick(firstBlurOn, firstBlurOff, firstImage)
            })
        })
    } else if (index === 1) {
        numberArray.forEach(item => {
            item.addEventListener('click', () => {
                blurClick(secondBlurOn, secondBlurOff, secondImage)
            })
        })
    } else if (index === 2) {
        numberArray.forEach(item => {
            item.addEventListener('click', () => {
                blurClick(thirdBlurOn, thirdBlurOff, thirdImage)
            })
        })
    } else if (index === 3) {
        numberArray.forEach(item => {
            item.addEventListener('click', () => {
                blurClick(fourthBlurOn, fourthBlurOff, fourthImage)
            })
        })
    } else if (index === 4) {
        numberArray.forEach(item => {
            item.addEventListener('click', () => {
                blurClick(fifthBlurOn, fifthBlurOff, fifthImage)
            })
        })
    }
})

let desc = document.querySelectorAll('.desc')

desc.forEach(descItem => {
    if (descItem.textContent === 'N/A') {
        descItem.style.textAlign = 'center'
    }
})