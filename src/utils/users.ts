/** @format */

export function findUserByEmail(email: string, users: Users): User | null {
  const user = users.find(user => user.emailAddress === email) || null
  return user
}

export function findUserById(userId: string, users: Users): User | null {
  const user = users.find(user => user.userAccountId === userId) || null
  return user
}

export function changeUserEmail(user: User, email: string): boolean {
  if (!user) {
    return false
  }

  user.emailAddress = email
  return true
}
