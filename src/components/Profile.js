import React from "react";
import styles from "./Profile.module.css"

const Profile = () => {
	return (
		<div className={styles.profile}>
			<img src="" alt="" />
			<div>
				ava + desc
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
				<div>
					<div>
						post 1
					</div>
					<div>
						post 2
					</div>
					<div>
						post 3
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile