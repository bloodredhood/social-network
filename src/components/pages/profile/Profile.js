import React from "react";
import Post from "./profile-items/Post";
import styles from "./Profile.module.css"

const Profile = () => {
	return (
		<div className={styles.profile}>
			<img src="" alt="" />
			<div className={styles.infoColumn}>
				<div className={styles.profilePhoto}>
					photo
				</div>
				<div className={styles.shortFriendlist}>
					6 random friends block
				</div>
			</div>
			<div className={styles.postsColumn}>
				<div className={styles.personalInfo}>
					profile info
				</div>
				<div className={styles.personalPosts}>
					<Post text={"any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. "}/>
					<Post text={"lorem lorem blablabla"}/>
					<Post text={"SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED "}/>
				</div>
			</div>
		</div>
	)
}

export default Profile