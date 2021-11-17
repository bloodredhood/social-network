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
			<div className={styles.item}>
				Сообщества
			</div>
			<div className={styles.item}>
				Фотографии
			</div>
			<div className={styles.item}>
				Музыка
			</div>
			<div className={styles.item}>
				Видео
			</div>
		</nav>
	)
}

export default Navbar