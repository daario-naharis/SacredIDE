import React from 'react';


const ContestList = ({id,Name,Organiser,Details}) =>{
	return(
		<div className='ma4'>
			<div style={{textAlign:"left"}} className='bg-black ph4 pv2 mv3 mh4 br3 ba bw2 b--washed-blue'>
				<h1 id='id' className='pink'>{id}</h1>
				<h2 id='Contest' className='pink pointer'>{Name}</h2>
				<h3 id='Organiser'className='yellow'>{Organiser}</h3>
				<p id='ContestDetails' className='light-blue'>{Details}</p>
			</div>
		</div>
	)
}

export default ContestList;