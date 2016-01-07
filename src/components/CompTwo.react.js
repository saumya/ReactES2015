// ES 2015
'use strict';
import React from 'react';

class CompTwo extends React.Component {  
	constructor() {
    super();
  }
  render() {
    return (
    	<div>
    		<h2>A React Component written in { this.props.name }</h2>
    	</div>
    );
  }
}

//export default CompTwo;
module.exports = CompTwo;