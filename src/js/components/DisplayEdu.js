import React from 'react';

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
   
  </tr>
  <tr>
    <td>{this.props.arr.examType}</td>
    <td>{this.props.arr.eduBoard}</td> 
    <td>{this.props.arr.percentage}</td>
    
  </tr>
  </table>
<hr></hr>
  </div>

		);
}
}

export default DisplayEdu;