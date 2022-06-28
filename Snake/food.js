import {on_snake, grow_snake} from './snake.js';
import {random_grid_pos} from './grid.js';

let food = get_random_food_pos();
const GROWTH_RATE = 1; // How much the snake grows each time it eats a food

export function update(){
    if(on_snake(food)){
        grow_snake(GROWTH_RATE);
        food = get_random_food_pos();
    }
}

export function draw(game_board){

    const food_element = document.createElement('div');
    food_element.style.gridRowStart = food.y;
    food_element.style.gridColumnStart = food.x;
    food_element.classList.add('food');
    game_board.appendChild(food_element);
    
}

function get_random_food_pos(){
    let new_food_pos;

    while(new_food_pos == null || on_snake(new_food_pos)){
        new_food_pos = random_grid_pos();
    }
    return new_food_pos;
}