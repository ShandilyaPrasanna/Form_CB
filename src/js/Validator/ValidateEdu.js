
import Validator from 'validator';

import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

let errors={};
console.log("Inside Validator",data);

if(Validator.isEmpty(data.examType)){
errors.examType="This Field is required";
}


if(Validator.isEmpty(data.eduBoard)){
errors.eduBoard="This Field is required";
}


	if(!(data.percentage<=100 && data.percentage>=0))
		errors.percentage="Percentage should be between 0 to 100";

if(Validator.isEmpty(data.percentage)){
errors.percentage="This Field is required";
}

 

console.log("validator error",errors)
return{
	errors,
	isValid:isEmpty(errors)
}

}