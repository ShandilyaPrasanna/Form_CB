import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdatePersonalInfo} from './../actions/Actions';


class Edit_Form_PI extends React.Component{
	
	constructor(props){
       super(props);
       this.state={
firstName:this.props.arr.firstName,
	lastName:this.props.arr.lastName,
	fatherName:this.props.arr.fatherName,
	motherName:this.props.arr.motherName,
	DOB:this.props.arr.DOB,
	temp:'',
isloading:true,
}
     
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
}
   

    onChange(e){
  this.setState({[e.target.name]:e.target.value});
     }


    onSubmit(e){
      e.preventDefault();
    console.log("Inside Submit",this.state);
    this.props.UpdatePersonalInfo(this.state);
    
 }
render(){
	return(
		<div>
<h1> Personal Details ........</h1>

<div>
 <label className="control-label">First Name</label>
 <input 
 type="text" 
 value={this.state.firstName}
 name="firstName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div>
 <label className="control-label">Last Name</label>
 <input 
 type="text" 
 value={this.state.lastName}
 name="lastName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div>
 <label className="control-label">Father Name</label>
 <input 
 value={this.state.fatherName}
 type="text" 
 name="fatherName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div>
 <label className="control-label">Mother Name</label>
 <input 
 type="text" 
 value={this.state.motherName}
 name="motherName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div>
 <label className="control-label">Date Of Birth</label>
 <input
 type="text" 
 value={this.state.DOB}
 name="DOB" 
 className="form-control"
 onChange={this.onChange} />
 </div>


 <div className="form-group">
 <button className="btn btn-primary btn-sm pull-right" onClick={this.onSubmit}>Save</button>
 </div>
 </div>

			);
	}
}

function mapStateToProps(state){
	return{
		UserInfo:state.UserInfo
	}
}

function matchDispatchToProps(dispatch){

	return bindActionCreators({UpdatePersonalInfo:UpdatePersonalInfo},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Edit_Form_PI);