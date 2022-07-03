setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

let lastTime

function update(time){
    if(lastTime != null){
        const delta = time - lastTime
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue'))

        document.documentElement.style.setProperty('--hue', hue + delta * 0.01)

        console.log(delta)
    }

    lastTime = time

    window.requestAnimationFrame(update)
}

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}   

setClock()
window.requestAnimationFrame(update)