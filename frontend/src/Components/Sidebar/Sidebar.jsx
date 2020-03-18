import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.css"
import Logo from "./Logo/Logo";
import ProfileActionsContainer from "./ProfileActions/ProfileActionsContainer";

let Sidebar = () => {
	let items = (
		<>
			<li className={s.menuItem}>
				<NavLink to="content" activeClassName={s.active}>
					Content
				</NavLink>
			</li>
			<li className={s.menuItem}>
				<NavLink to="tags" activeClassName={s.active}>
					Tags
				</NavLink>
			</li>
			<li className={s.menuItem}>
				<NavLink to="preferences" activeClassName={s.active}>
					Preferences
				</NavLink>
			</li>
		</>
	);
	return (
		<aside className={s.sideBar}>
			<Logo/>
			<ul className={s.navUl}>
				{items}
			</ul>
			<ProfileActionsContainer/>
		</aside>
	);
}

export default Sidebar;