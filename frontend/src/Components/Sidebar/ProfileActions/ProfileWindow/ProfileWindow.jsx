import React, {useRef} from "react";
import s from "./ProfileActionsModal.module.css"
import LogOutButtonContainer from "../../../Common/LogOutButton/LogOutButtonContainer";

let ProfileWindow = ({image, login, email, isProfileWindowShown, setIsProfileWindowShown}) => {
	let overlay = useRef(null);

	let onClickOutside = (e) => {
		if (e.target === overlay.current) {
			setIsProfileWindowShown(false);
		}
	}

	return isProfileWindowShown ?
		<div ref={overlay} className={s.overlay} onMouseDown={onClickOutside}>
			<div className={s.profileActionsModal}>
				<div className={s.head}>
					{
						(login && email && image) &&
						<div className={s.blockContainer}>
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
						<div className={s.blockContainer}>
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
				<div className={s.logOutButtonContainer}>
					<LogOutButtonContainer/>
				</div>
			</div>
		</div>
		: null
}

export default ProfileWindow;