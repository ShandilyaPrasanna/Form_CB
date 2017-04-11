import React from 'react';
import {Link} from 'react-router';
import Edit_Form_Add from './Edit_Form_Add';

class DisplayAdd extends React.Component{


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
     };

onEdit(e){
  e.preventDefault();
  if(this.state.isloading)
  {
var temp2=<Edit_Form_Add arr={this.props.arr} />
this.setState({
  temp:temp2,
  isloading:false,
});
}
else
{
  this.setState({
  temp:'',
  isloading:true,
});

}
};







render(){
	console.log("Inside DisplayADD Table",this.props.arr);
	return(


<div>
<h2> Address...</h2>
<td><center><button className="btn btn-primary btn-sm pull-right" onClick={this.onEdit.bind(this)}>Edit</button></center></td>
<h2>Present Address...</h2>
<table id="t01">
  <tr>
    <th>Street 1</th>
    <th>Street 2</th> 
    <th>City</th> 
    <th>State</th>
    <th>Zip</th>

  </tr>
  <tr>
    <td>{this.props.arr.PreAdd_Street_One}</td>
    <td>{this.props.arr.PreAdd_Street_Two}</td> 
    <td>{this.props.arr.PreAdd_City}</td>
    <td>{this.props.arr.PreAdd_State}</td>
    <td>{this.props.arr.PreAdd_Pin}</td>
   
  </tr>
  </table>
<hr></hr>
<h2>Permanent Address...</h2>
<table id="t01">
  <tr>
    <th>Street 1</th>
    <th>Street 2</th> 
    <th>City</th> 
    <th>State</th>
    <th>Zip</th>
    
  </tr>
  <tr>
    <td>{this.props.arr.PmtAdd_Street_One}</td>
    <td>{this.props.arr.PmtAdd_Street_Two}</td> 
    <td>{this.props.arr.PmtAdd_City}</td>
    <td>{this.props.arr.PmtAdd_State}</td>
    <td>{this.props.arr.PmtAdd_Pin}</td>
   
  </tr>
  </table>
<hr></hr>
{this.state.temp}
<hr></hr>
  </div>

		);
}
}

export default DisplayAdd;