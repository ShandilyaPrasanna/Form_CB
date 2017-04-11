export default function(state=null,action){
  
  
  var user={};
  if(typeof action.payload=="undefined" && action.type=="Edu_Update")
  {
  	var countc=0;
  }
   else if(action.type=="Edu_Update")
  {
    var countc=action.payload.count++;
  }

  else if(action.type=="Edu_Edit")
  {
    var countc=action.payload.count;
    console.log("inside Edu_Edit",countc)
  }
 
  
switch(action.type){
	case "Edu_Update":
 user={
 	    examType:action.payload.examType,
       	eduBoard:action.payload.eduBoard,
       	percentage:action.payload.percentage,
       	count:countc,
       	       	}
var key=action.payload.count-1;
return {...state,[key]:user};
break;

case "Edu_Edit":
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