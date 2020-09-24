/** @format */

import users from './users.json'
import games from './games.json'
import ownership from './ownership.json'

// TODO: we should store these data at a global state and using API to refresh the global state
// The global state could wrapper by Provider and comsumed by it children component
const cacheData = {
  users,
  games,
  ownership,
}

export default cacheData
