
import Validator from 'validator';

import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

let errors={};
console.log("Inside Validator",data);

if(Validator.isEmpty(data.PreAdd_Street_One)){
errors.PreAdd_Street_One="This Field is required";
}

if(Validator.isEmpty(data.PreAdd_Street_Two)){
errors.PreAdd_Street_Two="This Field is required";
}
 
if(Validator.isEmpty(data.PreAdd_City)){
errors.PreAdd_City="This Field is required";
}

if(Validator.isEmpty(data.PreAdd_State)){
	errors.PreAdd_State="This field is required";
}
if(Validator.isEmpty(data.PreAdd_Pin)){
errors.PreAdd_Pin="This Field is required";
}

if(Validator.isEmpty(data.PmtAdd_Street_One)){
errors.PmtAdd_Street_One="This Field is required";
}

if(Validator.isEmpty(data.PmtAdd_Street_Two)){
errors.PmtAdd_Street_Two="This Field is required";
}
 
if(Validator.isEmpty(data.PmtAdd_City)){
errors.PmtAdd_City="This Field is required";
}

if(Validator.isEmpty(data.PmtAdd_State)){
	errors.PmtAdd_State="This field is required";
}
if(Validator.isEmpty(data.PmtAdd_Pin)){
errors.PmtAdd_Pin="This Field is required";
}

console.log("validator error",errors)
return{
	errors,
	isValid:isEmpty(errors)
}

}