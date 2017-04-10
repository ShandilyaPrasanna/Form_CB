import React from 'react';
import {bindActionCreators} from 'redux';
import {Edit_Exp} from './../actions/Actions';
import {connect} from 'react-redux';
import {Edit_Form_Exp} from './Edit_Form_Exp';


class Displayexp extends React.Component{

constructor(props){
       super(props);
       this.state={
temp:'',
       }
     }
onEdit(e){
  e.preventDefault();
var temp1=Edit_Form_Exp(this.props.arr);
this.setState({temp:temp1});
}
render(){
  
  this.props.arr.count++;
console.log("Inside Display",this.props.arr);
	return(


<div>

<table id="t01">
  <tr>
    <th>Company Name</th>
    <th>Experience</th>
    <th></th> 
    
  </tr>
  <tr>
    <td>{this.props.arr.cpyName}</td>
    <td>{this.props.arr.exp}</td> 
     <td><button className="btn btn-primary btn-sm" onClick={this.onEdit.bind(this)}>Edit</button></td>
  
  </tr>
  
  </table>
<hr></hr>
{this.state.temp}
  </div>

		);
}
}

function matchDispatchToProps(dispatch){

  return bindActionCreators({Edit_Exp:Edit_Exp},dispatch)
}
export default connect((state)=>{return{}},matchDispatchToProps)(Displayexp);