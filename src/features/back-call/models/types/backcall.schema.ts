export interface BackCallResponse {}

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
