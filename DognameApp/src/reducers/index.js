import { combineReducers } from 'redux';
import KennelNameReducer from './reducer_kennelname';
import NamesReducer from './reducer_names';
import LittersReducer from './reducer_litters';
import ActiveLitter from './reducer_active_litter';

const rootReducer = combineReducers({
    kennelName: KennelNameReducer,
    names: NamesReducer,
    litters: LittersReducer,
    activeLitter: ActiveLitter
});

export default rootReducer;
