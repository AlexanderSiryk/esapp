import React from "react";
import s from "./ProfileActions.module.css"
import ProfileWindowContainer from "./ProfileWindow/ProfileWindowContainer";

let ProfileActions = ({image, login, email, ...props}) => {
	let onProfileActionsClick = () => {
		props.setIsProfileWindowShown(true);
	}
	return <>
		<div className={s.container}>
			{
				(login && email && image) &&
				<div className={s.blockContainer} onClick={onProfileActionsClick}>
					<div className={s.textContainer}>
						<span className={s.text}>{login}</span>
						<span className={s.text}>{email}</span>
					</div>
					<div>
						<div className={s.avatar} style={{background: `url("${image}")`}}/>
					</div>
				</div>
			}
			{
				!(login && email && image) &&
				<div className={s.blockContainer} onClick={onProfileActionsClick}>
					<div className={s.textContainer}>
						<span className={s.text}>login</span>
						<span className={s.text}>email</span>
					</div>
					<div>
						<div className={s.avatar}/>
					</div>
				</div>
			}

		</div>
		<ProfileWindowContainer/>
	</>
}

export default ProfileActions;