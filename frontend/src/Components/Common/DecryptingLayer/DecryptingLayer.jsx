import React from "react";
import {Redirect} from "react-router-dom";
import DecryptWindowContainer from "./DecryptWindow/DecryptWindowContainer";
import Main from "../../Main/Main";

let DecryptingLayer = ({isDecrypted, firstSignIn, toggleKeyModal, setTableEntries}) => {
	isDecrypted = firstSignIn ? true : isDecrypted;
	if (firstSignIn) {
		setTableEntries([]);
		toggleKeyModal();
	}
    return isDecrypted
            ? <>
                <Main/>
                <Redirect
                    to={{
                        pathname: "/content"
                    }}
                />
            </>
            : <>
                <DecryptWindowContainer/>
                <Redirect
                    to={{
                        pathname: "/"
                    }}
                />
            </>
}

export default DecryptingLayer;