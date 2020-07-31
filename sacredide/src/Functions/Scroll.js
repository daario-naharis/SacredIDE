import React from 'react';

const Scroll = (props) =>{

	return(
		<div style={{overflowY : 'scroll',borderTop: '10px solid lightBlue',height: '400px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;