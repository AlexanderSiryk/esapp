import React, {useEffect, useState} from "react";
import s from "./ModalWindowEdit.module.css";

let ModalWindowEdit = ({isInputValueValid, ...props}) => {
	let [nameField, setNameField] = useState("");
	let [loginField, setLoginField] = useState("");
	let [passField, setPassField] = useState("");
	let [tagField, setTagField] = useState("");
	let entry;
	if (props.editingEntryId !== 0) {
		entry = props.tableEntries[props.editingEntryId - 1];
	} else {
		entry = {
			name: "",
			login: "",
			password: "",
			tag: "",
		};
	}

	useEffect(() => {
		setNameField(entry.name);
		setLoginField(entry.login);
		setPassField(entry.password);
		setTagField(entry.tag);
	}, [entry]);

	let onSaveButton = () => {
		if (isInputValueValid({type: "name", value: nameField}) &&
			isInputValueValid({type: "login", value: loginField}) &&
			isInputValueValid({type: "password", value: passField}) &&
			isInputValueValid({type: "tag", value: tagField})) {
			props.toggleEditWindow(0);
			props.saveEditedEntry({
				id: props.editingEntryId,
				name: nameField,
				login: loginField,
				password: passField,
				tag: tagField,
			});
		} else alert("wrong input");
	};
	let onDeleteButton = () => {
		props.deleteEntry(props.editingEntryId);
		props.toggleEditWindow(0);
	};
	let onCancelButton = () => {
		props.toggleEditWindow(0);
	};
	let onCancel = (e) => {
		if (e.target.className === s.wrapper) {
			props.toggleEditWindow(0);
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
				props.editWindowShown &&
				<div className={s.wrapper} onMouseDown={onCancel}>
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
							<button onClick={onSaveButton}>Save Changes</button>
							<button onClick={onCancelButton}>Cancel</button>
							<button onClick={onDeleteButton}>Delete</button>
						</div>
					</div>
				</div>
			}
		</>
	);
};

export default ModalWindowEdit;