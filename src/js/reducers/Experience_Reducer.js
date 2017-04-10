export default function(state=null,action){
  
  
  var user={};
  if(typeof action.payload=="undefined" && action.type=="Exp_Update")
  {
  	var countc=-1;
  }
  else if(action.type=="Exp_Update")
  {
  	var countc=action.payload.count++;
  }

 /* else if(action.type=="Exp_Edit")
  {
    var countc=action.payload.count;
    console.log("inside Exp_Edit",countc)
  }*/
 
  
switch(action.type){
	case "Exp_Update":
 user={
 	    
       	cpyName:action.payload.cpyName,
       	exp:action.payload.exp,
       	count:countc,
       	       	}

return {...state,[action.payload.count]:user};
break;

default:
return state;
}
}