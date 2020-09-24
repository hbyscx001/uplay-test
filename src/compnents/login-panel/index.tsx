/** @format */

import React, {useState} from 'react'
import {
  Avatar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@material-ui/core'

import AvatarImage from './avatar.png'
import './style.scss'
import {ChangeEmailCallback, LoginCallback, LogoutCallback} from '../../hooks/login'

interface LoginPanelProps {
  className: string
  userEmail: string
  isLogin: boolean
  loginCallback: LoginCallback
  logoutCallback: LogoutCallback
  changeEmailCallback: ChangeEmailCallback
}

interface LoginButtonProps {
  loginCallback: LoginCallback
}

interface LogoutAndModifyEmail {
  logoutCallback: LogoutCallback
  changeEmailCallback: ChangeEmailCallback
}

function LoginPanel(props: LoginPanelProps) {
  const {isLogin, userEmail, loginCallback, logoutCallback, changeEmailCallback} = props

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      className={`login-panel ${props.className}`}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Avatar src={AvatarImage} />
        <Container className="email">{isLogin ? userEmail : 'xxx@xxx.com'}</Container>
      </Grid>
      {isLogin ? (
        <LogoutAndModifyEmail logoutCallback={logoutCallback} changeEmailCallback={changeEmailCallback} />
      ) : (
        <LoginButton loginCallback={loginCallback} />
      )}
    </Grid>
  )
}

function LogoutAndModifyEmail(props: LogoutAndModifyEmail) {
  const {logoutCallback, changeEmailCallback} = props
  const [email, setEmail] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <Button onClick={handleOpen}>Modify Email</Button>
      <Button onClick={() => logoutCallback()}>Logout</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Management</DialogTitle>
        <DialogContent>
          <DialogContentText>Please input your new email</DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="New Email Address"
            type="email"
            fullWidth
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              // TODO: we should check email change result
              changeEmailCallback(email)
              setOpen(false)
            }}
            color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

function LoginButton(props: LoginButtonProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {loginCallback} = props

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Ubisoft Game Center Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Welcome to ubisoft game center! please input your email and password to login your account.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              loginCallback(email, password)
              setOpen(false)
            }}
            color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LoginPanel
