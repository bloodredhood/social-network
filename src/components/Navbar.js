import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={`${styles.item} ${styles.active}`}>
				Profile
			</div>
			<div className={styles.item}>
				News
			</div>
			<div className={styles.item}>
				Friends
			</div>
			<div className={styles.item}>
				Dialogs
			</div>
		</nav>
	)
}

export default Navbar