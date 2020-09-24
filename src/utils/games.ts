/** @format */

export function getGamesForUser(user: User, games: Games, ownerships: Ownerships): Games {
  if (user.isAdmin) {
    return games
  }

  return ownerships
    .filter(ownership => ownership.userAccountId === user.userAccountId)
    .map(ownership => games.find(game => game.gameId == ownership.gameId))
    .filter(game => typeof game != 'undefined') as Games
}
