import { defineStore } from 'pinia'
import { AuthDto, AuthResponse, AuthSchema } from '../schema/auth.schema.ts'
import { reactive } from 'vue'
import { http } from '@/shared/api/axios.ts'

export const useAuthStore = defineStore('auth', () => {
  const authState: AuthSchema = reactive({
    dto: {
      name: '',
      password: '',
      email: '',
      telephone: ''
    },
    response: {
      token: ''
    },
    error: '',
    isError: false,
    isLoading: false
  })

  async function getAuthDto(dto: AuthDto): Promise<AuthResponse | void> {
    authState.isLoading = true
    try {
      authState.isLoading = false
      const res = await http.post('/auth', dto)
      if (!res.data) {
        throw new Error('Ошибка получения данных с авторизации')
      }
      authState.response = res.data
    } catch (e) {
      authState.isError = true
      authState.error = '' + e || 'Ошибка авторизации'
    }
  }

  return {
    authState,
    getAuthDto
  }
})
