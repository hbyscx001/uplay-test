/** @format */

import {useState, useCallback} from 'react'
import {changeUserEmail, findUserByEmail} from '../utils/users'
import cacheData from '../data'

export interface UserInfo {
  userAccountId: string
  firstName: string
  lastName: string
  emailAddress: string
  isAdmin: boolean
  dateOfBirth: string
}

export type ChangeEmailCallback = (email: string) => boolean
export type LoginCallback = (email: string, password: string) => boolean
export type LogoutCallback = () => void

type UseLoginTuple = [boolean, UserInfo, LoginCallback, LogoutCallback, ChangeEmailCallback]

export function useLogin(): UseLoginTuple {
  const [isLogin, setLogin] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userAccountId: 'unknown',
    firstName: 'unknown',
    lastName: 'unknown',
    emailAddress: 'unknown',
    isAdmin: false,
    dateOfBirth: 'unknown',
  })
  const loginCallback: LoginCallback = useCallback((email: string, passwd: string) => {
    const user = findUserByEmail(email, cacheData.users)

    if (user == null) {
      return false
    }

    if (user.password != passwd) {
      return false
    }

    setLogin(true)

    const {password, ...rest} = user
    setUserInfo(rest)

    return true
  }, [])

  const logoutCallback: LogoutCallback = useCallback(() => {
    setLogin(false)
  }, [])

  const changeEmailCallback: ChangeEmailCallback = useCallback(
    (email: string) => {
      if (isLogin) {
        const user = findUserByEmail(userInfo.emailAddress, cacheData.users)
        if (user) {
          changeUserEmail(user, email)
        }
        setUserInfo({
          ...userInfo,
          emailAddress: email,
        })
        return true
      }
      return false
    },
    [isLogin],
  )

  return [isLogin, userInfo, loginCallback, logoutCallback, changeEmailCallback]
}
