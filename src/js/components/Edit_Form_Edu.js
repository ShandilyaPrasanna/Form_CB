
import React from 'react';
import validateInput from './../Validator/ValidatorExp';
import {bindActionCreators} from 'redux';
import {Edit_Edu} from './../actions/Actions';
import {connect} from 'react-redux';

class Edit_Form_edu extends React.Component{

constructor(props){
       super(props);
       this.state={
       	count:this.props.arr.count,
        examType:this.props.arr.examType,
        eduBoard:this.props.arr.eduBoard,
        percentage:this.props.arr.percentage,

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
    this.props.Edit_Edu(this.state);
    
 }
 
	
	render(){
		console.log("inside edit ",this.state)
		return(


<div>
<div>
 <label className="control-label">Select Exam Type</label>
 <select 
 type="text" 
 value={this.state.examType}
 name="examType" 
 className="form-control"
 onChange={this.onChange}
 >
 

<option value="HighSchool">HighSchool</option>,
<option value="Intermediate">Intermediate</option>,
<option value="Graduation">Graduation</option>,
<option value="Post Graduation">Post Graduation</option>

 </select>
 </div>


 <div>
 <label className="control-label">Education Board</label>
 <input 
 type="text" 
 value={this.state.eduBoard}
 name="eduBoard" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div>
 <label className="control-label">Percentage Obtained</label>
 <input 
 value={this.state.percentage}
 type="text" 
 name="percentage" 
 className="form-control"
 onChange={this.onChange}/>
 </div>



 <div>
 <button className="btn btn-primary btn-sm pull-right" onClick={this.onSubmit}>Save</button>
 
 
 </div>
</div>
 );
	
}
}

function matchDispatchToProps(dispatch){

  return bindActionCreators({Edit_Edu:Edit_Edu},dispatch)
}
export default connect((state)=>{return{}},matchDispatchToProps)(Edit_Form_edu);