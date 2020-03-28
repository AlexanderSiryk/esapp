import React, {useRef, useState} from "react";
import s from "../ModalWindows.module.css"

let ModalWindowAdd = ({isInputValueValid, addWindowShown, decryptingKey, ...props}) => {
	let [nameField, setNameField] = useState("");
	let [loginField, setLoginField] = useState("");
	let [passField, setPassField] = useState("");
	let [tagField, setTagField] = useState("");

	let overlay = useRef(null);
	let onSave = () => {
		if (isInputValueValid({type: "name", value: nameField}) &&
			isInputValueValid({type: "login", value: loginField}) &&
			isInputValueValid({type: "password", value: passField}) &&
			isInputValueValid({type: "tag", value: tagField})) {
			let entry = {
				name: nameField, login: loginField, password: passField, tag: tagField,
			}
			let encryptedEntry = props.encryptEntry(entry, decryptingKey);
			// TODO request doesn't work + add paper toast
			props.postEntry(encryptedEntry);
			props.addEntry(entry);
			props.toggleAddWindow();
			setNameField("");
			setLoginField("");
			setPassField("");
			setTagField("");
		} else {
			alert("wrong input");
		}
	}

	// Do not combine onCancel and onCancelButton
	let onCancel = (e) => {
		if (e.target === overlay.current) {
			props.toggleAddWindow();
		}
	}
	let onCancelButton = () => {
		props.toggleAddWindow();
	}

	let onNameChange = (e) => {
		setNameField(e.target.value);
	}
	let onLoginChange = (e) => {
		setLoginField(e.target.value);
	}
	let onPassChange = (e) => {
		setPassField(e.target.value);
	}
	let onTagChange = (e) => {
		setTagField(e.target.value);
	}

	return addWindowShown &&
		<div ref={overlay} className={s.overlay} onMouseDown={onCancel}>
			<div className={s.modalContainer}>
				<div className={s.inputRow}>
					<label htmlFor="nameAdd">Name</label>
					<input
						type="text"
						autoFocus
						value={nameField}
						id="nameAdd"
						onChange={onNameChange}
					/>
				</div>
				<div className={s.inputRow}>
					<label htmlFor="loginAdd">Login</label>
					<input
						type="text"
						value={loginField}
						id="loginAdd"
						onChange={onLoginChange}
					/>
				</div>
				<div className={s.inputRow}>
					<label htmlFor="passwAdd">Password</label>
					<input
						type="text"
						value={passField}
						id="passwAdd"
						onChange={onPassChange}
					/>
				</div>
				<div className={s.inputRow}>
					<label htmlFor="tagAdd">Tag</label>
					<input
						type="text"
						value={tagField}
						id="tagAdd"
						onChange={onTagChange}
					/>
				</div>
				<div className="buttonRow">
					<button onClick={onSave}>Save</button>
					<button onClick={onCancelButton}>Cancel</button>
				</div>
			</div>
		</div>
}

export default ModalWindowAdd;