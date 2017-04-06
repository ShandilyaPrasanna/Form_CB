import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Displayexp from './Displayexp';


class Profile extends React.Component{

	constructor(props){
       super(props);
       		this.state={
       			ExpInfo:this.props.ExpInfo,
       		}
       	}

Mapfunction(){
	var arr=[];
const count=Object.keys(this.props.ExpInfo).length;
for(var i=0;i<count;i++){
arr[i]=this.props.ExpInfo[i];

}

return arr;
}


	render(){
		var temp=[]
temp=this.Mapfunction();


var temp4=temp.map(function(arry){
            return <Displayexp arr={arry}/>
        });




		return(
<div>
<h1>Profile...</h1>
<hr></hr>
<div className="container">
  
  <div className="panel-group" id="accordion">
  
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Personal Details</a>
        </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse in">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
  
  
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Address</a>
        </h4>
      </div>
      <div id="collapse2" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
    </div>
  

    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Education Detail</a>
        </h4>
      </div>
      <div id="collapse3" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum </div>
      </div>
    </div>


    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Experience</a>
        </h4>
      </div>
      <div id="collapse4" className="panel-collapse collapse">
        <div className="panel-body">

         {temp4}
       
        </div>
      </div>
    </div>
  

  </div> 
</div>
</div>


			);
	}
}

function mapStateToProps(state){
console.log("Check",state.ExpInfo);
	return{
		ExpInfo:state.ExpInfo
	}
}

//function matchDispatchToProps(dispatch){

//	return bindActionCreators({Add_Exp:Add_Exp},dispatch)}

export default connect(mapStateToProps)(Profile);