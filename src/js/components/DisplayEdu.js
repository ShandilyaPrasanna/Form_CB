import React from 'react';
import Edit_Form_edu from './Edit_Form_Edu';

class DisplayEdu extends React.Component{


       	constructor(props){
       super(props);
       this.state={
        examType:this.props.arr.examType,
        eduBoard:this.props.arr.eduBoard,
        percentage:this.props.arr.percentage,

temp:'',
isloading:true,
       }
     }

onEdit(e){
  e.preventDefault();
  if(this.state.isloading)
  {
var temp2=<Edit_Form_edu arr={this.props.arr} />
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
}

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
  <td><center><button className="btn btn-primary btn-sm" onClick={this.onEdit.bind(this)}>Edit</button></center></td>
  </tr>
  </table>
<hr></hr>
{this.state.temp}
<hr></hr>
  </div>

		);
}
}

export default DisplayEdu;