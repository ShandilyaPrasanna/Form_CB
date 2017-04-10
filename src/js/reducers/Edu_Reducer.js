export default function(state=null,action){
  
  
  var user={};
  if(typeof action.payload=="undefined" && action.type=="Edu_Update")
  {
  	var countc=-1;
  }
  else if(action.type=="Edu_Update")
  {
  	var countc=action.payload.count++;
  }
 
  
switch(action.type){
	case "Edu_Update":
 user={
 	    examType:action.payload.examType,
       	eduBoard:action.payload.eduBoard,
       	percentage:action.payload.percentage,
       	count:countc,
       	       	}

return {...state,[action.payload.count]:user};
break;

default:
return state;
}
}