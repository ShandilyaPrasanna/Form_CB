import {combineReducers} from 'redux';
import UserInfo from './UserInfo';

const allReducer=combineReducers({
	UserInfo:UserInfo
});

export default allReducer;