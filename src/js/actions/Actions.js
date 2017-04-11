
export function UpdatePersonalInfo(userData){
       console.log("UpdateUser",userData);	
		return {
			type:"Update_User",
			payload:userData
		};
	};

export function UpdateAddressInfo(userData){
       console.log("UpdateAddressInfo",userData);	
		return {
			type:"Update_Address",
			payload:userData
		};
	};

export function Add_Edu(userData){
      

		return {
			type:"Edu_Update",
			payload:userData
		};
	};

	export function Add_Exp(userData){
      

		return {
			type:"Exp_Update",
			payload:userData
		};
	}

	export function Edit_Exp(userData){
      console.log("inside Action Edit payload",userData);

		return {
			type:"Exp_Edit",
			payload:userData
		};
	}



	export function Edit_Edu(userData){
      console.log("inside Action Edit payload",userData);

		return {
			type:"Edu_Edit",
			payload:userData
		};
	}