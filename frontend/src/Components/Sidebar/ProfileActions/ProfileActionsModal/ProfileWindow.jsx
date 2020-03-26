import React, {useEffect, useRef} from "react";
import s from "./ProfileActionsModal.module.css"
import LogOutButtonContainer from "../../../Common/LogOutButton/LogOutButtonContainer";

let ProfileWindow = ({image, login, email, isProfileWindowShown, setIsProfileWindowShown}) => {
	let refObject = useRef(null);
	let handleClickOutside = (e) => {
		if (refObject.current && !refObject.current.contains(e.target)) {
			setIsProfileWindowShown(false);
		}
	}
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		}
	});
	return isProfileWindowShown ?
		<div className={s.popUpBackground}>
			<div ref={refObject} className={s.profileActionsModal}>
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