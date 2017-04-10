import React from 'react';
import {Link} from 'react-router';

class DisplayEdu extends React.Component{


       	



render(){
	console.log("Inside Display Table",this.props.arr);
	return(


<div>

<table id="t01">
  <tr>
    <th>Exam Type</th>
    <th>Board</th> 
    <th>Percentage</th> 
    <th></th>
   
  </tr>
  <tr>
    <td>{this.props.arr.examType}</td>
    <td>{this.props.arr.eduBoard}</td> 
    <td>{this.props.arr.percentage}</td>
    <td><Link to="/EducationDetail" className="btn btn-primary btn-sm">Edit</Link></td>
  </tr>
  </table>
<hr></hr>
  </div>

		);
}
}

export default DisplayEdu;