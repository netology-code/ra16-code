import React, { Fragment, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext';

export default function ToolbarFunctional() {
    const {token, profile, handleLogin, handleLogout} = useContext(AuthContext);
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
