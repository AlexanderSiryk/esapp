import React from "react";
import GoogleLogin from "react-google-login";
import * as PropTypes from "prop-types";
import server from "../../../API/DAL_API";
import {generateKey} from "../../../API/encryptingOperations";

/*
 * Component actions sequence:
 * 1. Render itself and make google signIn query.
 * 2. Get a response from google and set it into a local state.
 * 3. If that response was set, make server request to get if that user in database.
 * 4. If server returned "login" setIsFirstSignIn(false) if "create" setIsFirstSignIn(true)
 *    to redux state.
 * 5. Set userData and isSignedIn to redux state
 * */

class LogInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverDidResponse: false,
            userData: null,
            isSignedIn: false,
        }
    }

    render() {
        let onSuccess = (GoogleUser) => {
            let bp = GoogleUser.getBasicProfile();
            let data = {
                email: bp.getEmail(),
                login: bp.getName(),
                token: generateKey(bp.getEmail(), bp.getId()),
                image: bp.getImageUrl(),
            }
            this.setState({
                ...this.state,
                userData: data,
                isSignedIn: GoogleUser.isSignedIn(),
            });
        }
        let onFailure = (response) => {
            alert("Failure signing in via Google");
            console.dir(response);
            throw new Error("Failure signing in via Google");
        }
        return <GoogleLogin
            clientId={this.props.clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.userData && !prevState.userData) {
            server.performSignIn(this.state.userData.token, this.state.userData.email)
                .then(res => {
                    if (!res.isAxiosError) {
                        switch (res.data.log) {
                            case "login":
                                this.props.setIsFirstSignIn(false);
                                break;
                            case "create":
                                this.props.setIsFirstSignIn(true);
                                break;
                            default: throw new Error("Unexpected server response");
                        }
                        this.setState({
                            ...this.state,
                            serverDidResponse: true,
                        });
                    } else {
                        alert("Failure signing in");
                        throw new Error("Failure signing in");
                    }
                });
        }
        if (this.state.serverDidResponse &&
            !prevState.serverDidResponse) {
            // TODO remove logging
            console.log(this.state.userData);
            this.props.setUserData(this.state.userData);
            this.props.setIsSignedIn(this.state.isSignedIn);
        }
    }
}

LogInButton.propTypes = {
    clientId: PropTypes.any,
    setUserData: PropTypes.func,
    setIsSignedIn: PropTypes.func,
    setIsFirstSignIn: PropTypes.func,
}

export default LogInButton;
