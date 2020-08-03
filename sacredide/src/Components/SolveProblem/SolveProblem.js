import React from 'react';

const SolveProblem = ({onRouteChange}) =>{
	return(
		<div className=''>
		
			<div>
				<button 
				onClick={() => onRouteChange('problem')}
				type="button"
				className='f3 dim ba bw2 ph2 pv2 mb2 dib bg-washed-red purple pointer'
				>
				Solve a Problem
				</button>
			</div>
			<div className='ma2'>
			<div className=''>
				<label className='f5 ma2 green'>Select a Topic:</label>
				<select name="topic" id="topic">
				  <option value="DP">DP</option>
				  <option value="Greedy">Greedy</option>
				</select>
			</div>
			<div className=''>			
				<label className='f5 ma2 green'>Select Difficulty:</label>
				<select name="difficulty" id="difficulty">
				  <option value="Easy">Easy</option>
				  <option value="Medium">Medium</option>
				  <option value="Hard">Hard</option>
				  <option value="Pro">Pro</option>
				</select>
			</div>
			</div>
		</div>
	)
}

export default SolveProblem;