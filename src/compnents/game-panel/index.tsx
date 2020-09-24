/** @format */

import {Card, CardMedia, Typography} from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

import './style.scss'

interface GamePanelProps {
  gameId: number
  name: string
  thumbnail: string
  ageRestriction: number | null
  isAdmin: boolean
}

function GamePanel(props: GamePanelProps) {
  const {thumbnail, name, ageRestriction, isAdmin, gameId} = props

  const cardClassName = classNames('game-panel', {
    'game-panel-restriction': ageRestriction != null && ageRestriction >= 16,
  })

  return (
    <Card className={cardClassName} variant="outlined">
      <CardMedia className="game-panel-media" image={thumbnail} />
      <div className="game-panel-content">
        <Typography variant="h6">{name}</Typography>
        {isAdmin ? <Typography>Game ID: {gameId}</Typography> : null}
      </div>
    </Card>
  )
}

export default GamePanel
