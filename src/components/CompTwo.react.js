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
// legacy Export
//module.exports = CompTwo;

// ES 2015 export
export default CompTwo;
