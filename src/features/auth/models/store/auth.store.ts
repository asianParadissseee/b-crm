import { defineStore } from 'pinia'
import { AuthDto, AuthResponse } from '../schema/auth.schema.ts'
import { reactive } from 'vue'
import { http } from '@/shared/api/axios.ts'

export const useAuthStore = defineStore('auth', () => {
  const authData: AuthDto = reactive({
    email: '',
    fullName: '',
    password: '',
    phoneNumber: ''
  })

  async function getAuthDto(values: AuthDto): Promise<AuthResponse> {
    return (await http.post('/auth', values)).data
  }

  return {
    authData,
    getAuthDto
  }
})
