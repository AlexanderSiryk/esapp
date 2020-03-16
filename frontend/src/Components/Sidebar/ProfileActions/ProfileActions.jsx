import React from "react";
import s from "./ProfileActions.module.css"
import ProfileActionsModalContainer from "./ProfileActionsModal/ProfileActionsModalContainer";

let ProfileActions = ({image, login, email, ...props}) => {
	let onProfileActionsClick = () => {
		props.setIsPAMShown(true);
	}
	return (
		<>
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
			{
				props.isProfileActionsModalShown &&
				<ProfileActionsModalContainer/>
			}

		</>
	);
};

export default ProfileActions;