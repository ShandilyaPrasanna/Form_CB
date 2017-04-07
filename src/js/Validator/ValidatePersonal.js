
import Validator from 'validator';

import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

let errors={};
console.log("Inside Validator",data);

if(Validator.isEmpty(data.firstName)){
errors.firstName="This Field is required";
}



if(Validator.isEmpty(data.lastName)){
errors.lastName="This Field is required";
}
 
if(Validator.isEmpty(data.fatherName)){
errors.fatherName="This Field is required";
}

if(Validator.isEmpty(data.motherName)){
	errors.motherName="This field is required";
}
if(Validator.isEmpty(data.DOB)){
errors.DOB="This Field is required";
}

console.log("validator error",errors)
return{
	errors,
	isValid:isEmpty(errors)
}

}