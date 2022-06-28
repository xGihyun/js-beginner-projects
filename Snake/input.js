let input_direction = {x: 0, y: 0};
let last_input_direction = {x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'W':
        case 'w':
            if(last_input_direction.y !== 0) break;
            input_direction = {x: 0, y: -1};
            break;
        case 'S':
        case 's':
            if(last_input_direction.y !== 0) break;
            input_direction = {x: 0, y: 1};
            break;
        case 'A':
        case 'a':
            if(last_input_direction.x !== 0) break;
            input_direction = {x: -1, y: 0};
            break;
        case 'D':
        case 'd':
            if(last_input_direction.x !== 0) break;
            input_direction = {x: 1, y: 0};
            break;
    }
})

export function get_input_direction(){
    last_input_direction = input_direction;

    return input_direction;
}