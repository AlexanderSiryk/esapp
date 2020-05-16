import React, {useRef, useState} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import PasswordInput from "../PasswordInput/PasswordInput";
import makeStyles from "@material-ui/core/styles/makeStyles";
import server from "../../../API/DAL_API";

const useStyle = makeStyles(() => ({
    text: {
        width: 252 + "px",
        marginBottom: 5 + "px",
    }
}));

const GettingTheKeyModal = ({
                                isShown, toggleKeyModal, generateSalt, setKey,
                                generateKey, userToken, generateImageKey
                            }) => {
    const canvas = useRef(null);
    const classes = useStyle();
    const salt = generateSalt();
    const [disabledButton, setDisabledButton] = useState(true);
    const [keyImg, setKeyImg] = useState(null);
    const [$key, $setKey] = useState(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleInputChange = (value) => {
        if (disabledButton) setDisabledButton(false);
        if (!value) setDisabledButton(true);
        $setKey(generateKey(value, salt));
        const arr = generateImageKey(value, salt);
        if (canvas.current) {
            let mgDataModified = new ImageData(arr, 252, 285);
            const ctx = canvas.current.getContext('2d');
            ctx.putImageData(mgDataModified, 0, 0);
            setKeyImg(canvas.current.toDataURL())
        }
    }
    const handleSaveClick = () => {
        server.performRegistration(userToken, salt).then(res => {
            if (!res.isAxiosError) {
                localStorage.setItem("key", $key.toString());
                setKey($key);
                let element = document.createElement('a');
                element.setAttribute('href', keyImg.toString());
                element.setAttribute('download', "key");
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                setDisabledButton(true);
                toggleKeyModal();
            }
        })

    }

    return <>
        <Dialog
            fullScreen={fullScreen}
            open={isShown}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">Key generation</DialogTitle>
            <DialogContent>
                <PasswordInput className={classes.text} onChange={handleInputChange} autoFocus/>
                <div>
                    <canvas ref={canvas} width={252} height={285} style={{
                        background: "black",
                        borderRadius: "5px",
                    }}/>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSaveClick} color="primary" disabled={disabledButton}>
                    Save the key
                </Button>
            </DialogActions>
        </Dialog>
    </>
}

export default GettingTheKeyModal;
