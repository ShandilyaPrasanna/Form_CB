export default function(state={},action){
var user={};
console.log("Inside Address Reducer");
switch(action.type){
	case "Update_Address":

return user={
	
    	PreAdd_Street_One:action.payload.PreAdd_Street_One,
       	PreAdd_Street_Two:action.payload.PreAdd_Street_Two,
       	PreAdd_City:action.payload.PreAdd_City,
       	PreAdd_State:action.payload.PmtAdd_State,
       	PreAdd_Pin:action.payload.PreAdd_Pin,

       	PmtAdd_Street_One:action.payload.PmtAdd_Street_One,
       	PmtAdd_Street_Two:action.payload.PmtAdd_Street_Two,
       	PmtAdd_City:action.payload.PmtAdd_City,
       	PmtAdd_State:action.payload.PmtAdd_State,
       	PmtAdd_Pin:action.payload.PmtAdd_Pin

}
break;

default:
return state;
}}