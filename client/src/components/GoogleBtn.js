import React, { useContext, useEffect, useCallback } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import googleAuth from '../api/googleAuth';
import { AuthContext } from '../contexts/authContext';


const GoogleBtn = () => {


    const { isAuthenticated, setToken, setIsAuthenticated } = useContext(AuthContext);


    const login = (loginRes) => {
        console.log(loginRes);
        if (loginRes.code) {
            googleAuth.googleLogin(loginRes.code).then((res) => {
                console.log(res);
                localStorage.setItem('token', JSON.stringify({ 'token': res.tokenData.token, 'expires_at': res.tokenData.exp }));
                setIsAuthenticated(true);
                setToken(res.tokenData);
            })
        }
    }

    const logout = useCallback((response) => {

        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setToken('');
    }, [setIsAuthenticated, setToken]);

    useEffect(() => {

        let token = JSON.parse(localStorage.getItem('token'));

        if (token && new Date(token.expires_at).getTime() >= new Date().getTime()) {
            setIsAuthenticated(true);
            setToken(token);

        } else {
            logout();
        }

    }, [setIsAuthenticated, setToken, logout]);

    const handleLoginFailure = (response) => {
        console.log('Failed to log in', response)
    }

    const handleLogoutFailure = (response) => {
        console.log('Failed to log out')
    }
    return (
        <div>
            {isAuthenticated ?
                <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText='Logout'
                    onLogoutSuccess={logout}
                    onFailure={handleLogoutFailure}
                // theme='dark'
                >
                </GoogleLogout> : <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText='Login'
                    // theme='dark'
                    onSuccess={login}
                    onFailure={handleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    responseType='code'
                    redirectUri='postmessage'
                />
            }


        </div>
    )
}

export default GoogleBtn;
;