import React from 'react';
import validateInput from './../Validator/ValidatorExp';
import {bindActionCreators} from 'redux';
import {Edit_Exp} from './../actions/Actions';
import {connect} from 'react-redux';


class Edit_Form_exp extends React.Component{

constructor(props){
       super(props);
       this.state={
       	count:this.props.arr.count,
       	cpyName:this.props.arr.cpyName,
       	exp:this.props.arr.exp,
       	isLoading:false,
        errors:{},
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
    this.props.Edit_Exp(this.state);
    
 }
 
	
	render(){
		console.log("inside edit ",this.state)
		return(
	
<div>
<div >
 <label className="control-label">Company Name</label>
 <input 
 type="text" 
 value={this.state.cpyName}
 name="cpyName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div>
 <label className="control-label">Total Experience(in Years)</label>
 <input 
 value={this.state.exp}
 type="text" 
 name="exp" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


 <div >
 <button className="btn btn-primary btn-sm pull-right"  onClick={this.onSubmit}>Save</button>
 <br></br>
 </div>
</div>


			);
	
}
}

function matchDispatchToProps(dispatch){

  return bindActionCreators({Edit_Exp:Edit_Exp},dispatch)
}
export default connect((state)=>{return{}},matchDispatchToProps)(Edit_Form_exp);