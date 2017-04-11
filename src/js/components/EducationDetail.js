import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import {Add_Edu} from './../actions/Actions';
import validateInput from './../Validator/ValidateEdu';

class EducationDetail extends React.Component{
		constructor(props){
       super(props);
       
       	if(this.props.EduInfo===null){
       		this.state={
       			count:0,
       			examType:'',
       	eduBoard:'',
       	percentage:'',
        errors:{},
       	isLoading:false,
        isError:true
       		}
       	}
       	else
       	{
       		this.state={
       			count:this.props.EduInfo.count,
       			examType:this.props.EduInfo.examType,
       	eduBoard:this.props.EduInfo.eduBoard,
       	percentage:this.props.EduInfo.percentage,
        errors:{},
       	isLoading:false,
        isError:true,
       		}
        }

       	
     
     
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
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

    
    onChange(e){
	this.setState({[e.target.name]:e.target.value});
     }

onNext(e){

      hashHistory.push('/Experience');
     }


    onSubmit(e){
    e.preventDefault();
     if(this.isValid())
{
this.setState({errors:{}});
     if(this.state.isLoading==true)
     {
     this.setState({
 
        examType:" ",
     	eduBoard:'',
       	percentage:'',
       	isLoading:false,
        isError:false
 });	
 
     	
     }
     else{
this.setState({isLoading:true});
this.setState({isError:false});
     this.props.Add_Edu(this.state)
    
}}
else{
  this.setState({isError:true});
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
<h1> Education Details ........</h1>
<button className="btn btn-primary btn-md pull-right" disabled={!this.state.isLoading} onClick={this.onSubmit}>Add</button>
<br></br>
<hr></hr>
<div className={classnames("form-group",{'has-error':error.examType})}>
 <label className="control-label">Select Exam Type</label>
 <select 
 type="text" 
 value={this.state.examType}
 name="examType" 
 className="form-control"
 onChange={this.onChange}
 >
 <option value="" disabled>Select Exam Type</option>

<option value="HighSchool">HighSchool</option>,
<option value="Intermediate">Intermediate</option>,
<option value="Graduation">Graduation</option>,
<option value="Post Graduation">Post Graduation</option>

 </select>
 {error.examType && <span className="help-block">{error.examType}</span>}
 </div>


 <div className={classnames("form-group",{'has-error':error.eduBoard})}>
 <label className="control-label">Education Board</label>
 <input 
 type="text" 
 value={this.state.eduBoard}
 name="eduBoard" 
 className="form-control"
 onChange={this.onChange}/>
 {error.eduBoard && <span className="help-block">{error.eduBoard}</span>}
 </div>


<div className={classnames("form-group",{'has-error':error.percentage})}>
 <label className="control-label">Percentage Obtained</label>
 <input 
 value={this.state.percentage}
 type="text" 
 name="percentage" 
 className="form-control"
 onChange={this.onChange}/>
 {error.percentage && <span className="help-block">{error.percentage}</span>}
 </div>



 <div className="form-group">
 <button className="btn btn-primary btn-lg pull-left" disabled={this.state.isLoading} onClick={this.onSubmit}>Save</button>
 <button className="btn btn-primary btn-lg pull-right"  disabled={this.state.isError} onClick={this.onNext}>Next</button>
 
 </div>

</form>
</div>
</div>


			);
	}
}

function mapStateToProps(state){
console.log("Check",state.EduInfo);
	return{
		EduInfo:state.EduInfo
	}
}

function matchDispatchToProps(dispatch){

	return bindActionCreators({Add_Edu:Add_Edu},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(EducationDetail);