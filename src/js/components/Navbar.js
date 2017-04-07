import React from 'react';
import {hashHistory} from 'react-router';
 


class Navbar extends React.Component{

handleClick(){

hashHistory.push('/PersonalInfo');

}
  
render(){
  return(
<div>    
    <div className="container-fluid">
    <div className="nav navbar-nav">
    <a href="#" class="navbar-brand" ><img src="/../../images/logo.png" alt="your logo"></img></a>
    </div>
</div>
<br></br>
<button type="button" class="btn btn-warning btn-block" onClick={this.handleClick}>ENTER YOUR DETAILS HERE</button>
<hr></hr>
</div>
    );
}
}
    module.exports=Navbar;