import React, {useEffect, useRef, useState} from "react";
import {decryptEntries} from "../../../../API/encryptingOperations";
import LoadingWindow from "../../LoadingWindow/LoadingWindow";
import LockContainer from "./LockContainer/LockContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import {Redirect} from "react-router-dom";
import Main from "../../../Main/Main";

function SlideTransition(props) {
    return <Slide {...props} direction="up"/>;
}

const useStyles = (canvW, canvH) => makeStyles(() => ({
    canvas: {
        position: "absolute",
        zIndex: -10,
        top: -canvH + "px",
        left: -canvH + "px",
    },
    filesOverlay: {
        height: 100 + "vh",
        width: 100 + "vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 5,
    },
    input: {
        display: "none",
    },
    dropLabel: {
        width: 100 + "%",
        height: 100 + "%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    },
}));

let DecryptWindow = ({getImage, calcKey, tableEntries, isFetching, fetchError, ...props}) => {
    if (isFetching) {
        props.init(props.userToken);
    }
    const canvas = useRef(null);
    const [imageKey, setImageKey] = useState(null);
    const [fileDropping, setFileDropping] = useState(false);
    const IMAGE_KEY_WIDTH = 252;
    const IMAGE_KEY_HEIGHT = 285;
    const s = useStyles(IMAGE_KEY_WIDTH, IMAGE_KEY_HEIGHT)();

    const setImageFromFile = (file) => {
        if (file.type !== "image/png" &&
            file.type !== "image/jpeg") {
            alert("Wrong file type");
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setImageKey(this.result);
        };
    };

    useEffect(() => {
        const key = localStorage.getItem(`${props.userEmail}_key`);
        if (localStorage.getItem(`${props.userEmail}_key`) && tableEntries) {
            props.setKey(key);
            const te = decryptEntries(tableEntries, key);
            const dte = decryptEntries(props.deletedTableEntries, key);
            props.setAllEntries(te, dte, props.visits);
            props.setIsDecrypted(true);
        } else {
            if (imageKey) {
                getImage(imageKey).then((img) => {
                    if (img.width !== IMAGE_KEY_WIDTH ||
                        img.height !== IMAGE_KEY_HEIGHT) {
                        alert("Incorrect image key");
                        return;
                    }
                    canvas.current.width = img.width;
                    canvas.current.height = img.height;
                    const ctx = canvas.current.getContext("2d");
                    ctx.drawImage(img, 0, 0);
                    let mgData = ctx.getImageData(0, 0, img.width, img.height);
                    const key = calcKey(mgData.data);
                    localStorage.setItem(`${props.userEmail}_key`, key);
                    props.setKey(key);
                    setImageKey(null);
                    const te = decryptEntries(tableEntries, key);
                    const dte = decryptEntries(props.deletedTableEntries, key);
                    props.setAllEntries(te, dte, props.visits);
                    props.setIsDecrypted(true);
                });
            }
        }
    }, [imageKey]);

    const onInputChange = (e) => {
        if (e.target?.files.length) setImageFromFile(e.target.files[0]);
    };
    const clearDefaultBehaviour = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const onFileEnter = (e) => {
        clearDefaultBehaviour(e);
        setFileDropping(true);
    };
    const onFileDragOver = (e) => {
        clearDefaultBehaviour(e);
    };
    const onFileDragLeave = () => {
        setFileDropping(false);
    };
    const onFileDrop = (e) => {
        clearDefaultBehaviour(e);
        setFileDropping(false);
        if (e.dataTransfer?.files.length) setImageFromFile(e.dataTransfer.files[0]);
    };

    const [snackBarOpen, setSnackBarOpen] = useState(true);
    const closeSnackbar = (event, reason) => {
        if (reason === "clickaway") return;
        setSnackBarOpen(false);
    };

    if (props.isDecrypted) {
        return <>
            <Main/>
            <Redirect
                to={{
                    pathname: "/content",
                }}
            /></>;
    }

    return (
        !fetchError
            ? <div>
                {isFetching && <LoadingWindow/>}
                <div className={s.filesOverlay}
                     onDrop={onFileDrop}
                     onDragEnter={onFileEnter}
                     onDragOver={onFileDragOver}
                     onDragLeave={onFileDragLeave}
                />
                <LockContainer animationTriggered={fileDropping}
                               onFileHandle={(file) => setImageFromFile(file)}>
                    <label htmlFor="fileInput"
                           className={s.dropLabel}
                           onDragEnter={onFileEnter}
                           onDragLeave={onFileDragLeave}>
                        Pick/Drop<br/>your key
                    </label>
                </LockContainer>

                <input type="file" id="fileInput" className={s.input} onChange={onInputChange}/>
                <canvas ref={canvas} className={s.canvas}/>
            </div>
            : <>
                <div className={s.filesOverlay}/>
                <LockContainer>
                    <label htmlFor="fileInput">Pick/Drop<br/>your key</label>
                </LockContainer>
                <Snackbar open={snackBarOpen} autoHideDuration={9000}
                          onClose={closeSnackbar} TransitionComponent={SlideTransition}>
                    <Alert onClose={closeSnackbar} severity="error">
                        An Error occurred while fetching the data
                    </Alert>
                </Snackbar>
            </>
    );
};

export default DecryptWindow;
