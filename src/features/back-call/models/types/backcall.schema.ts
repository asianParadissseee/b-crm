export interface BackCallResponse {
  message: string
}

export interface BackCallDto {
  fullName: string
  phoneNumber: string
}

export interface BackCallSchema {
  dto: BackCallDto
  response: BackCallResponse
  isLoading?: boolean
  isError?: boolean
  error?: string
}
