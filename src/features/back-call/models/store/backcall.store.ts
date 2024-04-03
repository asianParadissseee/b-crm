import { defineStore } from 'pinia'
import { BackCallSchema, BackCallDto, BackCallResponse } from '../types/backcall.schema.ts'
import { http } from '@/shared/api/axios.ts'

export const useBackcallStore = defineStore('back-call', () => {
  const backCallState: BackCallSchema = {
    dto: {
      fullName: '',
      phoneNumber: ''
    },
    response: {},
    error: '',
    isError: false,
    isLoading: true
  }

  async function getBackCallDto(dto: BackCallDto): Promise<BackCallResponse | void> {
    backCallState.isLoading = true
    try {
      backCallState.isLoading = false
      const res = await http.post('/application', dto)
      if (!res.data) {
        throw new Error('Ошибка отправки данных с заявки на обратный звонок')
        backCallState.response = res.data
      }
    } catch (e) {
      backCallState.isError = true
      backCallState.error = '' + e || 'Ошибка отправки заявки на звонок'
    }
  }
  return {
    getBackCallDto,
    backCallState
  }
})
