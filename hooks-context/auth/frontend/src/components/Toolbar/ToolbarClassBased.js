import React, { Component, Fragment } from 'react'
import AuthContext from '../../contexts/AuthContext';

export default class ToolbarClassBased extends Component {
    // вариант 1
    static contextType = AuthContext;

    render() {
        const { token, profile, handleLogin, handleLogout } = this.context;
        return (
            <Fragment>
                {profile && <Fragment>
                    <img src={profile.avatar} />
                    <button onClick={handleLogout}>Logout</button>
                </Fragment>
                }
                {!profile && <button onClick={handleLogin}>Login</button>}
            </Fragment>
        )
    }
}

// вариант 2
ToolbarClassBased.contextType = AuthContext;