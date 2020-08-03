import React from 'react';
import ContestList from '../ContestList/ContestList';

const ContestListDisplayer = ({ContestData}) => {
	return(
		<div>
		{
		ContestData.map((user,i) =>{
			return(
	         <ContestList 
	          key={i}
	          id={ContestData[i].id} 
	          Name={ContestData[i].Name} 
	          Organiser={ContestData[i].Organiser} 
	          Details={ContestData[i].Details}
	         /> 
	     	)
     	})
     	}	
		</div>
	);
}

export default ContestListDisplayer;