import { ApiService, ApiResponse } from "./api";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

export interface ContactResponse {
  message: string;
}

export class ContactService {
  static async sendMessage(
    data: ContactFormData
  ): Promise<ApiResponse<ContactResponse>> {
    return ApiService.post<ContactResponse>("/api/contact", data);
  }
}

// Re-export the ApiResponse type for convenience
export type { ApiResponse } from "./api";
