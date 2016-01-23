import { combineReducers } from 'redux';
import KennelNameReducer from './reducer_kennelname';
import NamesReducer from './reducer_names';
import LittersReducer from './reducer_litters';

const rootReducer = combineReducers({
    kennelName: KennelNameReducer,
    names: NamesReducer,
    litters: LittersReducer
});

export default rootReducer;
