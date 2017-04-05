 var React=require('react');

var {Link}=require('react-router');

var Navbar=React.createClass({
  
  
render:function(){
  return(
    
    <div className="container-fluid">
    <ul className="nav navbar-nav">

    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/PersonalInfo">PersonalInfo</Link>
    </li>
    <li>
    <Link to="/AddressForm">Address</Link>
    </li>
    </ul>
    </div>

    )
}
});
    module.exports=Navbar;