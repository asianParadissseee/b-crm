export interface RegistrationDto {
  email: string
  name: string
  password: string
  telephone: string
}

export interface RegistrationResponse {
  token: string
}

export interface RegistrationSchema {
  dto: RegistrationDto
  response: RegistrationResponse
  isLoading?: boolean
  isError?: boolean
  error?: string
}
