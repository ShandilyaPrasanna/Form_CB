import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdateAddressInfo} from './../actions/Actions'
import validateInput from './../Validator/ValidateAdd';


class Edit_Form_Add extends React.Component{
	
	constructor(props){
       super(props);
       this.state={
       	
        PreAdd_Street_One:this.props.arr.PreAdd_Street_One,
        PreAdd_Street_Two:this.props.arr.PreAdd_Street_Two,
        PreAdd_City:this.props.arr.PreAdd_City,
        PreAdd_State:this.props.arr.PreAdd_State,
        PreAdd_Pin:this.props.arr.PreAdd_Pin,

        PmtAdd_Street_One:this.props.arr.PmtAdd_Street_One,
        PmtAdd_Street_Two:this.props.arr.PmtAdd_Street_Two,
        PmtAdd_City:this.props.arr.PmtAdd_City,
        PmtAdd_State:this.props.arr.PmtAdd_State,
        PmtAdd_Pin:this.props.arr.PmtAdd_Pin,

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
    this.props.UpdateAddressInfo(this.state);
    
 }
   

	render(){
	var error=this.state.errors;
		return(
      <div className="row">
      <div className="col-sm-3">
      </div>
      <div className="col-sm-6">
<form>
<h1> ADDRESS ........</h1>
<h2> PRESENT ADDRESS </h2>

<div>
 <label className="control-label">Street 1</label>
 <input 
 type="text" 
 value={this.state.PreAdd_Street_One}
 name="PreAdd_Street_One" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

 <div>
 <label className="control-label">Street 2</label>
 <input 
 type="text" 
 value={this.state.PreAdd_Street_Two}
 name="PreAdd_Street_Two" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div>
 <label className="control-label">City</label>
 <input 
 value={this.state.PreAdd_City}
 type="text" 
 name="PreAdd_City" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div>
 <label className="control-label">State</label>
 <input 
 type="text" 
 value={this.state.PreAdd_State}
 name="PreAdd_State" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div>
 <label className="control-label">Zip</label>
 <input
 type="text" 
 value={this.state.PreAdd_Pin}
 name="PreAdd_Pin" 
 className="form-control"
 onChange={this.onChange} />
 </div>

 <br></br>

 <h2> PERMANENT ADDRESS </h2>

<div>
 <label className="control-label">Street 1</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_Street_One}
 name="PmtAdd_Street_One" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

 <div>
 <label className="control-label">Street 2</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_Street_Two}
 name="PmtAdd_Street_Two" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div>
 <label className="control-label">City</label>
 <input 
 value={this.state.PmtAdd_City}
 type="text" 
 name="PmtAdd_City" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div>
 <label className="control-label">State</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_State}
 name="PmtAdd_State" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div>
 <label className="control-label">Zip</label>
 <input
 type="text" 
 value={this.state.PmtAdd_Pin}
 name="PmtAdd_Pin" 
 className="form-control"
 onChange={this.onChange} />
 </div>



 <div className="form-group">
 <button className="btn btn-primary btn-sm pull-right" onClick={this.onSubmit}>Save</button>

 </div>

</form>
</div>
</div>


			);
	}
}

function mapStateToProps(state){
	return{
		Edit_Form_Add:state.Edit_Form_Add
	}
}

function matchDispatchToProps(dispatch){

	return bindActionCreators({UpdateAddressInfo:UpdateAddressInfo},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Edit_Form_Add);