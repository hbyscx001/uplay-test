/** @format */

import React from 'react'
import {Button, Popover} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {UserInfo, LogoutCallback, LoginCallback, ChangeEmailCallback} from '../../hooks/login'
import LoginPanel from '../login-panel'

import './style.scss'

interface LoginAvatarProps {
  isLogin: boolean
  userInfo: UserInfo
  loginCallback: LoginCallback
  logoutCallback: LogoutCallback
  changeEmailCallback: ChangeEmailCallback
}

function LoginAvatar(props: LoginAvatarProps) {
  const {isLogin, userInfo, loginCallback, logoutCallback, changeEmailCallback} = props

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div className={'login-avatar'}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        <AccountCircleIcon />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <LoginPanel
          className="uplay"
          userEmail={userInfo.emailAddress}
          isLogin={isLogin}
          loginCallback={loginCallback}
          logoutCallback={logoutCallback}
          changeEmailCallback={changeEmailCallback}
        />
      </Popover>
    </div>
  )
}

export default LoginAvatar
