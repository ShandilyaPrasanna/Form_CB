import React from 'react';
import {Link} from 'react-router';

class DisplayAdd extends React.Component{

render(){
	console.log("Inside DisplayADD Table",this.props.arr);
	return(


<div>
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
  </div>

		);
}
}

export default DisplayAdd;