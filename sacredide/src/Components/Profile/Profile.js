import React from 'react' ;
// import CreateContest from '../CreateContest/CreateContest';


const Profile = ({name,submissions}) =>{
	return(
		<div>
			<div>
				<h1>{name}</h1>
				<h2>You have successfully submitted {submissions} programs</h2>
			</div>
		</div>
	);
};

export default Profile;