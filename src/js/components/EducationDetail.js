import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Add_Edu} from './../actions/Actions';

class EducationDetail extends React.Component{
		constructor(props){
       super(props);
       
       	if(this.props.EduInfo===null){
       		this.state={
       			count:0,
       			examType:'',
       	eduBoard:'',
       	percentage:'',
       	isLoading:false
       		}
       	}
       	else
       	{
       		this.state={
       			count:this.props.EduInfo.count,
       			examType:this.props.EduInfo.examType,
       	eduBoard:this.props.EduInfo.eduBoard,
       	percentage:this.props.EduInfo.percentage,
       	isLoading:false
       		}

       	}
     
     
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
}
    
    onChange(e){
	this.setState({[e.target.name]:e.target.value});
     }

     onNext(e){

      hashHistory.push('/Experience');
     }

    onSubmit(e){
    e.preventDefault();
     if(this.state.isLoading==true)
     {
     this.setState({
 
        examType:" ",
     	eduBoard:'',
       	percentage:'',
       	isLoading:false
 });	
 
     	
     }
     else{
this.setState({isLoading:true});

     this.props.Add_Edu(this.state)
    
}}


	render(){
	
		return(
<form>
<h1> Education Details ........</h1>
<button className="btn btn-primary btn-md pull-right" onClick={this.onSubmit}>Add</button>
<br></br>
<hr></hr>
<div className="form-group">
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
 </div>


 <div className="form-group">
 <label className="control-label">Education Board</label>
 <input 
 type="text" 
 value={this.state.eduBoard}
 name="eduBoard" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div className="form-group">
 <label className="control-label">Percentage Obtained</label>
 <input 
 value={this.state.percentage}
 type="text" 
 name="percentage" 
 className="form-control"
 onChange={this.onChange}/>
 </div>



 <div className="form-group">
 <button className="btn btn-primary btn-lg pull-left" disabled={this.state.isLoading} onClick={this.onSubmit}>Save</button>
 <button className="btn btn-primary btn-lg pull-right"  onClick={this.onNext}>Next</button>
 
 </div>

</form>



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