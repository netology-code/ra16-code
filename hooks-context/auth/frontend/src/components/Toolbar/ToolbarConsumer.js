import React, {Fragment} from 'react'
import AuthContext from '../../contexts/AuthContext';

export default function ToolbarConsumer() {
    return (
      <AuthContext.Consumer>
        {value => (
          <Fragment>
            {value.profile && <Fragment>
              <img src={value.profile.avatar} />
              <button onClick={value.handleLogout}>Logout</button>
            </Fragment>
            }
            {!value.profile && <button onClick={value.handleLogin}>Login</button>}
          </Fragment>
        )}
      </AuthContext.Consumer>
    )
}
