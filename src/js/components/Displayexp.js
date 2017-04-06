import React from 'react';

class Displayexp extends React.Component{


       	



render(){
	console.log("Inside Display Table",this.props.arr);
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
    <td><center><button className="btn btn-danger btn-sm" >Edit</button></center></td>
  </tr>
  </table>
<hr></hr>
  </div>

		);
}
}

export default Displayexp;