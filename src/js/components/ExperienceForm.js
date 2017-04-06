import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Add_Exp} from './../actions/Actions';

class ExperienceDetail extends React.Component{
		constructor(props){
       super(props);
       
       	if(this.props.ExpInfo===null){
       		this.state={
       			count:0,
       	cpyName:'',
       	exp:'',
       	isLoading:false
       		}
       	}
       	else
       	{
       		this.state={
       			count:this.props.ExpInfo.count,
       	cpyName:this.props.ExpInfo.cpyName,
       	exp:this.props.ExpInfo.exp,
       	isLoading:false
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
     if(this.state.isLoading==true)
     {
     this.setState({
 
        
     	cpyName:'',
       	exp:'',
       	isLoading:false
 });	
 
     	
     }
     else{
this.setState({isLoading:true});

     this.props.Add_Exp(this.state)
    
}}


	render(){
	
		return(
<form>
<h1> Experience ........</h1>

<br></br>
<hr></hr>



 <div className="form-group">
 <label className="control-label">Company Name</label>
 <input 
 type="text" 
 value={this.state.cpyName}
 name="cpyName" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div className="form-group">
 <label className="control-label">Total Experience(in Years)</label>
 <input 
 value={this.state.exp}
 type="text" 
 name="exp" 
 className="form-control"
 onChange={this.onChange}/>
 </div>



 <div className="form-group">
 <button className="btn btn-primary btn-lg pull-left" disabled={this.state.isLoading} onClick={this.onSubmit}>Save</button>
 <button className="btn btn-primary btn-lg pull-right" onClick={this.onSubmit}>Add</button>
 
 
 </div>

</form>



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