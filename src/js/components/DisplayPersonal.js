import React from 'react';

class DisplayPersonal extends React.Component{

render(){
  console.log("Inside Display Table",this.props.arr);
  return(


<div>

<table id="t01">
  <tr>
    <th>First Name</th>
    <th>Last Name</th> 
    <th>Father Name</th> 
    <th>Mother Name</th>
    <th>Date Of Birth</th>
    <th></th>
  </tr>
  <tr>
    <td>{this.props.arr.firstName}</td>
    <td>{this.props.arr.lastName}</td> 
    <td>{this.props.arr.fatherName}</td>
    <td>{this.props.arr.motherName}</td>
    <td>{this.props.arr.DOB}</td>
    <td><center><button className="btn btn-danger btn-sm" >Edit</button></center></td>
  </tr>
  </table>
<hr></hr>
  </div>

    );
}
}

export default DisplayPersonal;