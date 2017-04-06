export default function(state=null,action){
  
  
  var user={};
  if(state===null && action.type=="Edu_Update")
  {
  	var countc=0;
    console.log("Inside If");
  }
  else if(action.type=="Edu_Update")
  {
  	var countc=action.payload.count++;
  }
 
    console.log("payload",action.payload);
  
console.log("Inside Education Reducer",action.payload);
switch(action.type){
	case "Edu_Update":
 user={
 	    examType:action.payload.examType,
       	eduBoard:action.payload.eduBoard,
       	percentage:action.payload.percentage,
       	count:countc++,
       	       	}

return {...state,[action.payload.count]:user};
break;

default:
return state;
}
}