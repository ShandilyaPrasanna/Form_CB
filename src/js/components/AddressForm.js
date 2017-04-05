import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class AddressInfo extends React.Component{
	
	constructor(props){
       super(props);
       this.state={
       	
       	PreAdd_Street_One:this.props.AddressInfo.PreAdd_Street_One,
       	PreAdd_Street_Two:this.props.AddressInfo.PreAdd_Street_Two,
       	PreAdd_City:this.props.AddressInfo.PreAdd_City,
       	PreAdd_State:this.props.AddressInfo.PreAdd_State,
       	PreAdd_Pin:this.props.AddressInfo.PreAdd_Pin,

       	PmtAdd_Street_One:this.props.AddressInfo.PmtAdd_Street_One,
       	PmtAdd_Street_Two:this.props.AddressInfo.PmtAdd_Street_Two,
       	PmtAdd_City:this.props.AddressInfo.PmtAdd_City,
       	PmtAdd_State:this.props.AddressInfo.PmtAdd_State,
       	PmtAdd_Pin:this.props.AddressInfo.PmtAdd_Pin

       }
     
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
}
    
    onChange(e){
	this.setState({[e.target.name]:e.target.value});
     }

    onSubmit(e){
     e.preventDefault();
     this.props.UpdateUser(this.state)
    }

	render(){
	
		return(
<form>
<h1> ADDRESS ........</h1>
<h2> PRESENT ADDRESS </h2>

<div className="form-group">
 <label className="control-label">Street 1</label>
 <input 
 type="text" 
 value={this.state.PreAdd_Street_Two}
 name="PreAdd_Street_Two" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

 <div className="form-group">
 <label className="control-label">Street 2</label>
 <input 
 type="text" 
 value={this.state.PreAdd_Street_Two}
 name="PreAdd_Street_Two" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div className="form-group">
 <label className="control-label">City</label>
 <input 
 value={this.state.PreAdd_City}
 type="text" 
 name="PreAdd_City" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div className="form-group">
 <label className="control-label">State</label>
 <input 
 type="text" 
 value={this.state.PreAdd_State}
 name="PreAdd_State" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div className="form-group">
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

<div className="form-group">
 <label className="control-label">Street 1</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_Street_Two}
 name="PmtAdd_Street_Two" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

 <div className="form-group">
 <label className="control-label">Street 2</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_Street_Two}
 name="PmtAdd_Street_Two" 
 className="form-control"
 onChange={this.onChange}/>
 </div>


<div className="form-group">
 <label className="control-label">City</label>
 <input 
 value={this.state.PmtAdd_City}
 type="text" 
 name="PmtAdd_City" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div className="form-group">
 <label className="control-label">State</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_State}
 name="PmtAdd_State" 
 className="form-control"
 onChange={this.onChange}/>
 </div>

<div className="form-group">
 <label className="control-label">Zip</label>
 <input
 type="text" 
 value={this.state.PmtAdd_Pin}
 name="PmtAdd_Pin" 
 className="form-control"
 onChange={this.onChange} />
 </div>



 <div className="form-group">
 <button className="btn btn-primary btn-lg pull-left" onClick={this.onSubmit}>Save</button>
 <button className="btn btn-primary btn-lg pull-right" >Next</button>
 </div>

</form>



			);
	}
}

function mapStateToProps(state){
	return{
		AddressInfo:state.AddressInfo
	}
}

//function matchDispatchToProps(dispatch){
//
//	return bindActionCreators({UpdateUser:UpdateUser},dispatch)
//}
export default connect(mapStateToProps)(AddressInfo);