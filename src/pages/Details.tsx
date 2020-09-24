/** @format */

import React from 'react'
import {findUserById} from '../utils/users'
import cacheData from '../data'
import GamePanel from '../compnents/game-panel'
import {getGamesForUser} from '../utils/games'

interface DetailsPageProps {
  isLogin: boolean
  userId: string
}

function DetailsPage(props: DetailsPageProps) {
  const {userId, isLogin} = props

  const user = findUserById(userId, cacheData.users)

  if (isLogin && user != null) {
    const games = getGamesForUser(user, cacheData.games, cacheData.ownership)

    const gamePanelList = games.map(game => {
      return <GamePanel {...game} isAdmin={user.isAdmin} />
    })

    return <div className="details">{gamePanelList}</div>
  } else {
    return null
  }
}

export default DetailsPage
