import { get_input_direction } from "./input.js";

export const SPEED = 20; //FPS
const snake_body = [{x: 16, y: 16}];
let new_segments = 0;

export function update(){
    const input_direction = get_input_direction();

    add_segments();
    for(let i = snake_body.length - 2; i >= 0; i--){
        snake_body[i + 1] = {...snake_body[i]}
    }

    snake_body[0].x += input_direction.x;
    snake_body[0].y += input_direction.y;
}

// Draw snake
export function draw(game_board){

    snake_body.forEach(segment => {
        const snake_element = document.createElement('div');
        snake_element.style.gridRowStart = segment.y;
        snake_element.style.gridColumnStart = segment.x;
        snake_element.classList.add('snake');
        game_board.appendChild(snake_element);
    })
}

// When snake eats food, it grows
export function grow_snake(amount){
    new_segments += amount;
}

export function on_snake(pos, {ignore_head = false} = {}){
    return snake_body.some((segment, index) => {
        if(ignore_head && index === 0) return false;
        return equal_pos(segment, pos);
    })
}

export function get_snake_head(){
    return snake_body[0];
}

export function snake_intersection(){
    return on_snake(snake_body[0], {ignore_head: true})
}

function equal_pos(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function add_segments(){
    for(let i = 0; i < new_segments; i++){
        snake_body.push({...snake_body[snake_body.length - 1]});
    }

    new_segments = 0;
}