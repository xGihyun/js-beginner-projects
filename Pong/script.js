import Ball from './ball.js'
import Paddle from './paddle.js'

const ball = new Ball(document.getElementById("ball"))
const player_paddle = new Paddle(document.getElementById("player-paddle"))
const computer_paddle = new Paddle(document.getElementById("computer-paddle"))
const player_score_elem = document.getElementById("player-score")
const computer_score_elem = document.getElementById("computer-score")

let last_time

function update(time){
    if(last_time != null){
        const delta = time - last_time
        ball.update(delta, [player_paddle.rect(), computer_paddle.rect()])
        computer_paddle.update(delta, ball.y)
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

        document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

        if(lose()){
            handle_lose()
        }
    }
    last_time = time

    window.requestAnimationFrame(update)
}

function lose(){
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}

function handle_lose(){
    const rect = ball.rect()

    if(rect.right >= window.innerWidth){
        player_score_elem.textContent = parseInt(player_score_elem.textContent) + 1
    }
    else{
        computer_score_elem.textContent = parseInt(computer_score_elem.textContent) + 1
    }
    ball.reset()
    computer_paddle.reset()
}

document.addEventListener("mousemove", e => {
    player_paddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)