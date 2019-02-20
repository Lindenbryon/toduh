import { FETCH_TODOS } from '../actions/types';

//check if action triggered by component is FETCH_TODOS - if true, it updates state with list of todos 

export default (state = {}, action) =>{
    switch(action.type) {
        case FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
}
