const SPEED = 0.02

export default class Paddle{
    constructor(paddle_elem){
        this.paddle_elem = paddle_elem
        this.reset()
    }

    get position(){
        return parseFloat(getComputedStyle(this.paddle_elem).getPropertyValue("--position"))
    }

    set position(value){
        this.paddle_elem.style.setProperty("--position", value)
    }

    rect(){
        return this.paddle_elem.getBoundingClientRect()
    }

    reset(){
        this.position = 50
    }

    update(delta, ball_y){
        this.position += SPEED * delta * (ball_y - this.position)
    }
}