const INITIAL_VELOCITY = 0.025
const VELOCITY_INCREASE = 0.00001

export default class Ball{
    constructor(ball_elem){
        this.ball_elem = ball_elem
        this.reset()
    }

    get x(){
        return parseFloat(getComputedStyle(this.ball_elem).getPropertyValue("--x"))
    }

    set x(value){
        this.ball_elem.style.setProperty("--x", value)
    }

    get y(){
        return parseFloat(getComputedStyle(this.ball_elem).getPropertyValue("--y"))
    }

    set y(value){
        this.ball_elem.style.setProperty("--y", value)
    }

    rect(){
        return this.ball_elem.getBoundingClientRect()
    }

    reset(){
        this.x = 50
        this.y = 50
        this.direction = {x: 0}

        while(Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9){
            const heading = random_number_between(0, 2 * Math.PI)
            this.direction = {x: Math.cos(heading), y: Math.sin(heading)}
        }
        console.log(this.direction)
        this.velocity = INITIAL_VELOCITY
    }

    update(delta, paddle_rects){
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
        const rect = this.rect()

        if(rect.bottom >= window.innerHeight || rect.top <= 0){
            this.direction.y *= -1
        }

        if(paddle_rects.some(r => is_collision(r, rect))){
            this.direction.x *= -1
        }
    }
}

function random_number_between(min, max){
    return Math.random() * (max - min) + min
}

function is_collision(rect1, rect2){
    return rect1.left <= rect2.right && rect1.right >= rect2.left && rect1.top <= rect2.bottom && rect1.bottom >= rect2.top
}

