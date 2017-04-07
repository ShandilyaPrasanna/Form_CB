import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import {Add_Exp} from './../actions/Actions';
import validateInput from './../Validator/ValidatorExp';

class ExperienceDetail extends React.Component{
		constructor(props){
       super(props);
       
       	if(this.props.ExpInfo===null){
       		this.state={
       			count:0,
       	cpyName:'',
       	exp:'',
       	isLoading:false,
        errors:{},
       		}
        }
       	
       	else
       	{
       		this.state={
       			count:this.props.ExpInfo.count,
       	cpyName:this.props.ExpInfo.cpyName,
       	exp:this.props.ExpInfo.exp,
       	isLoading:false,
        errors:{},
       		}
        }

       	
     
     
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
}
    
    onChange(e){
	this.setState({[e.target.name]:e.target.value});
     }


    onSubmit(e){
    e.preventDefault();
     if(this.isValid())
{
this.setState({errors:{}});
     if(this.state.isLoading==true)
     {
     this.setState({
 
        
     	cpyName:'',
       	exp:'',
       	isLoading:false,
        errors:{}
 });	
 
     	
     }
     else{
this.setState({isLoading:true});

     this.props.Add_Exp(this.state)
    
}}}

isValid(){

const {errors,isValid}=validateInput(this.state);
  if(!isValid)
  {
    console.log("error");
    this.setState({errors});
  }
return isValid;
}


profile(e){
	e.preventDefault();
	hashHistory.push('/Profile');
}

	render(){
	var error=this.state.errors
		return(
      <div className="row">
      <div className="col-sm-3">
      </div>
      <div className="col-sm-6">
<form>
<h1> Experience ........</h1>
<button className="btn btn-primary btn-md pull-right" disabled={!this.state.isLoading} onClick={this.onSubmit}>Add</button>
<br></br>
<hr></hr>



 <div className={classnames("form-group",{'has-error':error.cpyName})}>
 <label className="control-label">Company Name</label>
 <input 
 type="text" 
 value={this.state.cpyName}
 name="cpyName" 
 className="form-control"
 onChange={this.onChange}/>
 {error.cpyName && <span className="help-block">{error.cpyName}</span>}
 </div>


<div className={classnames("form-group",{'has-error':error.exp})}>
 <label className="control-label">Total Experience(in Years)</label>
 <input 
 value={this.state.exp}
 type="text" 
 name="exp" 
 className="form-control"
 onChange={this.onChange}/>
 {error.exp && <span className="help-block">{error.exp}</span>}
 </div>



 <div className="form-group">
 <button className="btn btn-primary btn-lg pull-left" disabled={this.state.isLoading} onClick={this.onSubmit}>Save</button>
 <button className="btn btn-primary btn-lg pull-right" disabled={!this.state.isLoading} onClick={this.profile}>View Profile</button>
 
 
 
 </div>

</form>
</div>
</div>


			);
	}
}

function mapStateToProps(state){
console.log("Check",state.ExpInfo);
	return{
		ExpInfo:state.ExpInfo
	}
}

function matchDispatchToProps(dispatch){

	return bindActionCreators({Add_Exp:Add_Exp},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(ExperienceDetail);