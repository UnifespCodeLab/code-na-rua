import { AxiosError } from 'axios';

export type ApiResponseError = AxiosError<{
  statusCode: number;
  message: string;
  error?: string;
  redirectURL?: string;
}>;