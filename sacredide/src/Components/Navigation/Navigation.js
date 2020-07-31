import React from 'react';
const Navigation = ({isSignedIn,onRouteChange}) =>{
	

	if(isSignedIn){
		return(
			<div className='center'>
				<p  onClick={() => onRouteChange('home')} className='grow fl w-30 b f1 blue pointer'>S.I.D.E.</p>
				<p className = 'fl w-10'></p>
				<p onClick={() => onRouteChange('profile')} className=' fl w-20 f3 b link dim washed-green underline pa3 pointer'>Profile</p>
				<p className = 'fl w-10'></p>
				<p onClick={() => onRouteChange('signin')} className=' fl w-30 f3 b link dim washed-green underline pa3 pointer'>SignOut</p>

			</div>
		)
	}
	else{
		return(
			<div className='center'>
				{/*<div><img src="../../icon.png"/></div>*/}
				<p className='grow fl w-30 b f1 blue '>S.I.D.E.</p>
				<p className = 'fl w-10'></p>
				<p  onClick={() => onRouteChange('signin')} className=' fl w-20 f3 b link dim washed-green underline pa3 pointer'>SignIn</p>
				<p className = 'fl w-10'></p>
				<p onClick={() => onRouteChange('register')} className=' fl w-30 f3 b link dim washed-green underline pa3 pointer'>Register</p>

			</div>
		)
	}
}


export default Navigation;