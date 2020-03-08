import React, {useState} from "react";
import s from "./ModalWindowAdd.module.css"

let ModalWindowAdd = (props) => {
	let [nameField, setNameField] = useState("");
	let [loginField, setLoginField] = useState("");
	let [passField, setPassField] = useState("");
	let [tagField, setTagField] = useState("");
	let onSaveButton = () => {
		props.addEntry({
			name: nameField,
			login: loginField,
			password: passField,
			tag: tagField
		});
		props.toggleAddWindow();
		setNameField("");
		setLoginField("");
		setPassField("");
		setTagField("");
	};
	let onCancelButton = () => {
		props.toggleAddWindow();
	};
	let onCancel = (e) => {
		if (e.target.className === s.wrapper) {
			props.toggleAddWindow();
		}
	};
	let onNameChange = (e) => {
		setNameField(e.target.value);
	};
	let onLoginChange = (e) => {
		setLoginField(e.target.value);
	};
	let onPassChange = (e) => {
		setPassField(e.target.value);
	};
	let onTagChange = (e) => {
		setTagField(e.target.value);
	};
	return (
		<>
			{
				props.addWindowShown &&
				<div className={s.wrapper} onClick={onCancel}>
					<div className={s.modalContainer}>
						<div className={s.inputRow}>
							<label htmlFor="nameAdd">Name</label>
							<input
								type="text"
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
							<button onClick={onSaveButton}>Save</button>
							<button onClick={onCancelButton}>Cancel</button>
						</div>
					</div>
				</div>
			}
		</>
	);
};

export default ModalWindowAdd;