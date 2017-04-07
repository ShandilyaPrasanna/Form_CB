import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';
import {UpdatePersonalInfo} from './../actions/Actions';
import validateInput from './../Validator/ValidatePersonal';

class PersonalInfo extends React.Component{
	
	constructor(props){
       super(props);
       this.state={
       	firstName:'',
       	lastName:'',
       	fatherName:'',
       	motherName:'',
       	DOB:'',
        errors:{},
        isLoading:true,

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


     isValid(){

const {errors,isValid}=validateInput(this.state);
  if(!isValid)
  {
    console.log("error");
    this.setState({errors});
  }
return isValid;
}


    onSubmit(e){
      e.preventDefault();
      if(this.isValid())
{
this.setState({errors:{}});
this.setState({isLoading:false});
     this.props.UpdatePersonalInfo(this.state)
    }
    else{
  this.setState({isLoading:true});
}
}


  
	render(){
	var error=this.state.errors;
		return(
      <div className="row">
      <div className="col-sm-3">
      </div>
      <div className="col-sm-6">
<form>
<h1> Personal Details ........</h1>

<div className={classnames("form-group",{'has-error':error.firstName})}>
 <label className="control-label">First Name</label>
 <input 
 type="text" 
 value={this.state.firstName}
 name="firstName" 
 className="form-control"
 onChange={this.onChange}/>
 {error.firstName && <span className="help-block">{error.firstName}</span>}
 </div>

 <div className={classnames("form-group",{'has-error':error.lastName})}>
 <label className="control-label">Last Name</label>
 <input 
 type="text" 
 value={this.state.lastName}
 name="lastName" 
 className="form-control"
 onChange={this.onChange}/>
 {error.lastName && <span className="help-block">{error.lastName}</span>}
 </div>


<div className={classnames("form-group",{'has-error':error.fatherName})}>
 <label className="control-label">Father Name</label>
 <input 
 value={this.state.fatherName}
 type="text" 
 name="fatherName" 
 className="form-control"
 onChange={this.onChange}/>
 {error.fatherName && <span className="help-block">{error.fatherName}</span>}
 </div>

<div className={classnames("form-group",{'has-error':error.motherName})}>
 <label className="control-label">Mother Name</label>
 <input 
 type="text" 
 value={this.state.motherName}
 name="motherName" 
 className="form-control"
 onChange={this.onChange}/>
 {error.motherName && <span className="help-block">{error.motherName}</span>}
 </div>

<div className={classnames("form-group",{'has-error':error.DOB})}>
 <label className="control-label">Date Of Birth</label>
 <input
 type="text" 
 value={this.state.DOB}
 name="DOB" 
 className="form-control"
 onChange={this.onChange} />
 {error.DOB && <span className="help-block">{error.DOB}</span>}
 </div>


 <div className="form-group">
 <button className="btn btn-primary btn-lg pull-left" onClick={this.onSubmit}>Save</button>
 <button className="btn btn-primary btn-lg pull-right" disabled={this.state.isLoading} onClick={this.onNext}>Next</button>
 </div>

</form>
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
export default connect(mapStateToProps,matchDispatchToProps)(PersonalInfo);