import React from "react";
import s from "./ProfileActions.module.css"

let ProfileActions = ({image, login, email}) => {
	return (
		<div className={s.container}>
			{
				(login && email) &&
				<div className={s.textContainer}>
					<span className={s.text}>{login}</span>
					<span className={s.text}>{email}</span>
				</div>
			}
			{
				image &&
				<div>
					<div className={s.avatar} style={{background: `url("${image}")`}}/>
				</div>
			}

		</div>
	);
};

export default ProfileActions;