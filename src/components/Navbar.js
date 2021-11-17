import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={`${styles.item} ${styles.active}`}>
				Моя страница
			</div>
			<div className={styles.item}>
				Новости
			</div>
			<div className={styles.item}>
				Друзья
			</div>
		</nav>
	)
}

export default Navbar