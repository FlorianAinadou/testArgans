import {combineReducers} from 'redux';
import PlaceReducer from './places-reducer'

const allReducers = combineReducers({
    places: PlaceReducer
});

export default allReducers;