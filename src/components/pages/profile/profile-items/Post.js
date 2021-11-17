import React from "react";
import styles from "./Post.module.css"

const Post = (props) => {
	return (
		<div className={styles.postCommon}>
			<div className={styles.postHead}>
				<div  className={styles.postHead}>
					<div className={styles.miniAva}>
						mini-ava
						<img href="" alt="" />
					</div>
					<div>
						<a className={styles.postLink} href='http://localhost:3000/'>Profile Name</a>
						<p className={styles.weakText}>post date</p>
					</div>
				</div>
				<div>
					post options
				</div>
			</div>
			<div className={styles.postMain}>
				<div>{props.text}</div>
				<div className={styles.postImg}>
					image added to post
					<img src="" alt="" />
				</div>
			</div>
			<div className={styles.postFoot}>
				<div className={styles.postFootItem}>
					<div>
						like
					</div>
					<p className={styles.weakText}>
						+counter
					</p>
				</div>
				<div className={styles.postFootItem}>
					<div>
						comment
					</div>
					<p className={styles.weakText}>
						+counter
					</p>
				</div>
			</div>
		</div>
	)
}

export default Post