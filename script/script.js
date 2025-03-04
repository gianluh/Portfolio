let firstBlurChanger = document.getElementById('first-blur-changer')
let firstOnOff = document.getElementById('first-on-off')
let firstImage = document.getElementById('first-image')

let secondBlurChanger = document.getElementById('second-blur-changer')
let secondOnOff = document.getElementById('second-on-off')
let secondImage = document.getElementById('second-image')

let blurState = 'blurred'

const blurClick = (onOff, image) => {
    if (blurState === 'blurred') {
        onOff.style.transition = 'transform 200ms ease-in-out'
        onOff.style.transform = 'rotate(180deg) translatex(-80%)'
        image.style.transition = 'filter 200ms ease-in-out'
        image.style.filter = 'blur(0px)'
        blurState = 'unblurred'
    } else if (blurState === 'unblurred') {
        onOff.style.transition = 'transform 200ms ease-in-out'
        onOff.style.transform = ''
        image.style.transition = 'filter 200ms ease-in-out'
        image.style.filter = 'blur(20px)'
        blurState = 'blurred'
    }
}

firstBlurChanger.onclick = () => {
    blurClick(firstOnOff, firstImage)
}

firstOnOff.onclick = () => {
    blurClick(firstOnOff, firstImage)
}

secondBlurChanger.onclick = () => {
    blurClick(secondOnOff, secondImage)
}

secondOnOff.onclick = () => {
    blurClick(secondOnOff, secondImage)
}