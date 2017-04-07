
import Validator from 'validator';

import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

let errors={};
console.log("Inside Validator",data);

if(Validator.isEmpty(data.cpyName)){
errors.cpyName="This Field is required";
}

if(Validator.isEmpty(data.exp)){
errors.exp="This Field is required";
}



console.log("validator error",errors)
return{
	errors,
	isValid:isEmpty(errors)
}

}