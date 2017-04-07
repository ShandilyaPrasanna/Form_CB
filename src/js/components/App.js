import React from 'react';
import {hashHistory} from 'react-router';

class App extends React.Component{

handleClick(){

hashHistory.push('/PersonalInfo');

}

render(){
	return(
<div>
<br></br>
<button type="button" class="btn btn-warning btn-block" onClick={this.handleClick}>ENTER YOUR DETAILS HERE</button>
<hr></hr>
</div>

		);
}


}
export default App;