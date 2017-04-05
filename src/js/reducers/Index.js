import {combineReducers} from 'redux';
import UserInfo from './PersonalInfo_reducer';
import AddressInfo from './Address_reducer';

const allReducer=combineReducers({
	UserInfo:UserInfo,
	AddressInfo:AddressInfo
});

export default allReducer;