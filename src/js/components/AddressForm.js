import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import {UpdateAddressInfo} from './../actions/Actions'
import validateInput from './../Validator/ValidateAdd';


class AddressInfo extends React.Component{
	
	constructor(props){
       super(props);
       this.state={
       	
       	PreAdd_Street_One:'',
       	PreAdd_Street_Two:'',
       	PreAdd_City:'',
       	PreAdd_State:'',
       	PreAdd_Pin:'',

       	PmtAdd_Street_One:'',
       	PmtAdd_Street_Two:'',
       	PmtAdd_City:'',
       	PmtAdd_State:'',
       	PmtAdd_Pin:'',
        errors:{},
        isLoading:true

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

    onSubmit(e){
     e.preventDefault();
     if(this.isValid())
{
this.setState({errors:{}});
this.setState({isLoading:false});
     this.props.UpdateAddressInfo(this.state)
    }
    else{
  this.setState({isLoading:true});
}
  }

    onNext(e){

      hashHistory.push('/EducationDetail');
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

<div className={classnames("form-group",{'has-error':error.PreAdd_Street_One})}>
 <label className="control-label">Street 1</label>
 <input 
 type="text" 
 value={this.state.PreAdd_Street_One}
 name="PreAdd_Street_One" 
 className="form-control"
 onChange={this.onChange}/>
  {error.PreAdd_Street_One && <span className="help-block">{error.PreAdd_Street_One}</span>}
 </div>

 <div className={classnames("form-group",{'has-error':error.PreAdd_Street_Two})}>
 <label className="control-label">Street 2</label>
 <input 
 type="text" 
 value={this.state.PreAdd_Street_Two}
 name="PreAdd_Street_Two" 
 className="form-control"
 onChange={this.onChange}/>
  {error.PreAdd_Street_Two && <span className="help-block">{error.PreAdd_Street_Two}</span>}
 </div>


<div className={classnames("form-group",{'has-error':error.PreAdd_City})}>
 <label className="control-label">City</label>
 <input 
 value={this.state.PreAdd_City}
 type="text" 
 name="PreAdd_City" 
 className="form-control"
 onChange={this.onChange}/>
  {error.PreAdd_City && <span className="help-block">{error.PreAdd_City}</span>}
 </div>

<div className={classnames("form-group",{'has-error':error.PreAdd_State})}>
 <label className="control-label">State</label>
 <input 
 type="text" 
 value={this.state.PreAdd_State}
 name="PreAdd_State" 
 className="form-control"
 onChange={this.onChange}/>
  {error.PreAdd_State && <span className="help-block">{error.PreAdd_State}</span>}
 </div>

<div className={classnames("form-group",{'has-error':error.PreAdd_Pin})}>
 <label className="control-label">Zip</label>
 <input
 type="text" 
 value={this.state.PreAdd_Pin}
 name="PreAdd_Pin" 
 className="form-control"
 onChange={this.onChange} />
  {error.PreAdd_Pin && <span className="help-block">{error.PreAdd_Pin}</span>}
 </div>

 <br></br>

 <h2> PERMANENT ADDRESS </h2>

<div className={classnames("form-group",{'has-error':error.PmtAdd_Street_One})}>
 <label className="control-label">Street 1</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_Street_One}
 name="PmtAdd_Street_One" 
 className="form-control"
 onChange={this.onChange}/>
  {error.PmtAdd_Street_One && <span className="help-block">{error.PmtAdd_Street_One}</span>}
 </div>

 <div className={classnames("form-group",{'has-error':error.PmtAdd_Street_Two})}>
 <label className="control-label">Street 2</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_Street_Two}
 name="PmtAdd_Street_Two" 
 className="form-control"
 onChange={this.onChange}/>
  {error.PmtAdd_Street_Two && <span className="help-block">{error.PmtAdd_Street_Two}</span>}
 </div>


<div className={classnames("form-group",{'has-error':error.PmtAdd_City})}>
 <label className="control-label">City</label>
 <input 
 value={this.state.PmtAdd_City}
 type="text" 
 name="PmtAdd_City" 
 className="form-control"
 onChange={this.onChange}/>
  {error.PmtAdd_City && <span className="help-block">{error.PmtAdd_City}</span>}
 </div>

<div className={classnames("form-group",{'has-error':error.PmtAdd_State})}>
 <label className="control-label">State</label>
 <input 
 type="text" 
 value={this.state.PmtAdd_State}
 name="PmtAdd_State" 
 className="form-control"
 onChange={this.onChange}/>
  {error.PmtAdd_State && <span className="help-block">{error.PmtAdd_State}</span>}
 </div>

<div className={classnames("form-group",{'has-error':error.PmtAdd_Pin})}>
 <label className="control-label">Zip</label>
 <input
 type="text" 
 value={this.state.PmtAdd_Pin}
 name="PmtAdd_Pin" 
 className="form-control"
 onChange={this.onChange} />
  {error.PmtAdd_Pin && <span className="help-block">{error.firstName}</span>}
 </div>



 <div className="form-group">
 <button className="btn btn-primary btn-lg pull-left" onClick={this.onSubmit}>Save</button>
 <button className="btn btn-primary btn-lg pull-right"disabled={this.state.isLoading} onClick={this.onNext} >Next</button>
 </div>

</form>
</div>
</div>


			);
	}
}

function mapStateToProps(state){
	return{
		AddressInfo:state.AddressInfo
	}
}

function matchDispatchToProps(dispatch){

	return bindActionCreators({UpdateAddressInfo:UpdateAddressInfo},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(AddressInfo);