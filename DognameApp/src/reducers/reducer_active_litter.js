export default function(state = null, action) {
    switch(action.type) {
        case 'LITTER_SELECTED':
            return action.payload;
    }

    return state;
}
