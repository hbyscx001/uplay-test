/** @format */

interface User {
  userAccountId: string
  firstName: string
  lastName: string
  emailAddress: string
  isAdmin: boolean
  password: string
  dateOfBirth: string
}

interface Game {
  gameId: number
  name: string
  thumbnail: string
  ageRestriction: number | null
}

interface Ownership {
  ownershipId: number
  userAccountId: string
  gameId: number
  state: number
  registeredDate: string
}

type Games = Array<Game>
type Users = Array<User>
type Ownerships = Array<Ownership>

declare module '*.png' {
  const content: any
  export default content
}
