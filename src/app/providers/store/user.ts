import { defineStore } from 'pinia'

interface IUser {
  id: number
  name: string
}
interface IUserState {
  users: IUser[]
}

export const useGetUsersStore = defineStore('user-list', {
  state(): IUserState {
    return {
      users: [
        {
          id: 1,
          name: 'John'
        }
      ]
    }
  }
})
