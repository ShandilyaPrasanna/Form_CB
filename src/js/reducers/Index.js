import {combineReducers} from 'redux';
import UserInfo from './PersonalInfo_reducer';
import AddressInfo from './Address_reducer';
import EduInfo from './Edu_Reducer';
import ExpInfo from './Experience_Reducer'

const allReducer=combineReducers({
	UserInfo:UserInfo,
	AddressInfo:AddressInfo,
	EduInfo:EduInfo,
	ExpInfo:ExpInfo

});

export default allReducer;