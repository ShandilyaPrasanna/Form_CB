import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdatePersonalInfo} from './../actions/Actions';

class PersonalInfo extends React.Component{
	
	constructor(props){
       super(props);
       this.state={
       	firstName:this.props.UserInfo.firstName,
       	lastName:this.props.UserInfo.lastName,
       	fatherName:this.props.UserInfo.fatherName,
       	motherName:this.props.UserInfo.motherName,
       	DOB:this.props.UserInfo.DOB

       }
     
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
}
    
    onChange(e){
	this.setState({[e.target.name]:e.target.value});
     }

     onNext(e){

      hashHistory.push('/AddressForm');
     }

    onSubmit(e){
     e.preventDefault();
     this.props.UpdatePersonalInfo(this.state)
    }

	render(){
	
		return(
<form>
<h1> Personal Details ........</h1>

<div className="form-group">
 <label className="control-label">First Name</label>
 <input 
 type="text" 
 value={this.state.firstName}
 name="firstName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

 <div className="form-group">
 <label className="control-label">Last Name</label>
 <input 
 type="text" 
 value={this.state.lastName}
 name="lastName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div className="form-group">
 <label className="control-label">Father Name</label>
 <input 
 value={this.state.fatherName}
 type="text" 
 name="fatherName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div className="form-group">
 <label className="control-label">Mother Name</label>
 <input 
 type="text" 
 value={this.state.motherName}
 name="motherName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div className="form-group">
 <label className="control-label">Date Of Birth</label>
 <input
 type="text" 
 value={this.state.DOB}
 name="DOB" 
 className="form-control"
 onChange={this.onChange} />
 </div>


 <div className="form-group">
 <button className="btn btn-primary btn-lg pull-left" onClick={this.onSubmit}>Save</button>
 <button className="btn btn-primary btn-lg pull-right" onClick={this.onNext}>Next</button>
 </div>

</form>



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
export default connect(mapStateToProps,matchDispatchToProps)(PersonalInfo);