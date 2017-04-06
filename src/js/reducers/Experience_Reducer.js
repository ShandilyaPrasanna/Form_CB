export default function(state=null,action){
  
  
  var user={};
  if(state===null && action.type=="Exp_Update")
  {
  	var countc=0;
    console.log("Inside If");
  }
  else if(action.type=="Exp_Update")
  {
  	var countc=action.payload.count++;
  }
 
    console.log("payload",action.payload);
  
console.log("Inside Experience Reducer",action.payload);
switch(action.type){
	case "Exp_Update":
 user={
 	    
       	cpyName:action.payload.cpyName,
       	exp:action.payload.exp,
       	count:countc++,
       	       	}

return {...state,[action.payload.count]:user};
break;

default:
return state;
}
}