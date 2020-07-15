import { combineReducers } from 'redux';
import defaultState from '../state/index';

const numReducer = (state = defaultState, action) => {    
    if (action.type === 'setCount') {
        return {
            ...state,
            num: state.num + action.num,
        }
    }
    if (action.type === 'reduceCount') {
        return {
            ...state,
            num: state.num - 1,
        }
    }
    return state;
};

// const reducers = combineReducers(numReducer);

export default numReducer;
