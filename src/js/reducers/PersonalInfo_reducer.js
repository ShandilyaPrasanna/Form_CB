export default function(state={},action){
var user={};
console.log("Inside Reducer");
switch(action.type){
	case "Update_User":
return user={
	
	firstName:action.payload.firstName,
	lastName:action.payload.lastName,
	fatherName:action.payload.fatherName,
	motherName:action.payload.motherName,
	DOB:action.payload.DOB
}
break;

default:
return state;
}}