import React from "react";
import Post from "./profile-items/Post";
import "./Profile.css"

const Profile = () => {
	return (
		<div className='profile'>
			<img src="" alt="" />
			<div className='infoColumn'>
				<div className='profilePhoto'>
					photo
				</div>
				<div className='shortFriendlist'>
					6 random friends block
				</div>
			</div>
			<div className='postsColumn'>
				<div className='personalInfo'>
					profile info
				</div>
				<div className='personalPosts'>
					<Post text={"any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. "} likesCount={1}/>
					<Post text={"lorem lorem blablabla"} likesCount={15}/>
					<Post text={"SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED "} likesCount={5}/>
				</div>
			</div>
		</div>
	)
}

export default Profile