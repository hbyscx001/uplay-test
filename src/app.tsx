/** @format */

import React from 'react'
import {Container, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'
import LoginAvatar from './compnents/login-avatar'
import {useLogin} from './hooks/login'
import DetailsPage from './pages/Details'

import './styles/global.scss'

function UplayMain() {
  const [isLogin, loginInfo, loginCallback, logoutCallback, changeEmailCallback] = useLogin()

  return (
    <Container className="body-container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Game Center</Typography>
          <LoginAvatar
            isLogin={isLogin}
            userInfo={loginInfo}
            loginCallback={loginCallback}
            logoutCallback={logoutCallback}
            changeEmailCallback={changeEmailCallback}
          />
        </Toolbar>
      </AppBar>
      <div className={isLogin ? 'detail-main' : 'detail-main-empty'}>
        <DetailsPage isLogin={isLogin} userId={loginInfo.userAccountId} />
      </div>
    </Container>
  )
}

export default () => <UplayMain />
