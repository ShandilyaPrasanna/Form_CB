import React from 'react';

import Edit_Form_Exp from './Edit_Form_Exp';


class Displayexp extends React.Component{

constructor(props){
       super(props);
       this.state={
        cpyName:this.props.arr.cpyName,
        exp:this.props.arr.exp,
temp:'',
isloading:true,
       }
     }
onEdit(e){
  e.preventDefault();
  if(this.state.isloading)
  {
var temp1=<Edit_Form_Exp arr={this.props.arr} />
this.setState({
  temp:temp1,
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
     <td><center><button className="btn btn-primary btn-sm" onClick={this.onEdit.bind(this)}>Edit</button></center></td>
  
  </tr>
  
  </table>
<hr></hr>
{this.state.temp}
  </div>

		);
}
}

export default Displayexp;