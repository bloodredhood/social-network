import React from "react";
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

//activeClassName={styles.active}

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink to='/profile' activeClassName='active'>Profile</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/news' activeClassName='active'>News</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/friends' activeClassName='active'>Friends</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/dialogs' activeClassName='active'>Dialogs</NavLink>
			</div>
		</nav>
	)
}

export default Navbar