export interface AuthDto {
  email: string;
  fullName: string;
  password: string;
  phoneNumber: string;
}

export interface AuthResponse {
  token: string
}

export interface AuthSchema {
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
  dto: AuthDto;
  response: AuthResponse;
}