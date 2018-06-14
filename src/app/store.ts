import { INCREMENT, DECREMENT, MULTIPLY10 } from "./actions";

export interface IAppState {
    counter: number;
    multiple: number;
}

export const INITIAL_STATE = {
    counter: 0,
    multiple: 1,
}

export function rootReducer(state: IAppState, action): IAppState {
    switch(action.type) {
        case INCREMENT: 
            return {counter: state.counter + 1, multiple: state.multiple};
        case DECREMENT: 
            return {counter: state.counter - 1, multiple: state.multiple};
        case MULTIPLY10: 
            return {counter: state.counter, multiple: state.multiple * 10};
    }
    return state;
}
