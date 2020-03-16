import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.css"
import Logo from "./Logo/Logo";
import ProfileActionsContainer from "./ProfileActions/ProfileActionsContainer";

let Sidebar = (props) => {
	let items = props.items.map((item, index) => {
		return (
			<li className={s.menuItem} key={index}>
				<NavLink to={item.link} activeClassName={s.active}>
					{item.name}
				</NavLink>
			</li>
		)
	});

	return (
		<aside className={s.sideBar}>
			<Logo/>
			<ul className={s.navUl}>
				{items}
			</ul>
			<ProfileActionsContainer/>
		</aside>
	);
};

export default Sidebar;