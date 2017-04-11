import React from 'react';
import Edit_Form_PI from './Edit_Form_PI';

class DisplayPersonal extends React.Component{


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
var temp2=<Edit_Form_PI arr={this.props.arr} />
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
   <td><center><button className="btn btn-primary btn-sm pull-right" onClick={this.onEdit.bind(this)}>Edit</button></center></td>
  </tr>
  </table>
<hr></hr>
{this.state.temp}
<hr></hr>
  </div>

    );
}
}

export default DisplayPersonal;