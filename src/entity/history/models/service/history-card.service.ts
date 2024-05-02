import { http } from '@/shared/api/axios.ts'

export async function historyCardService() {
  return (await http.get('/')).data
}
