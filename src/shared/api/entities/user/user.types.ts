export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  access_token?: string;
}

export const userSchema = "++id, name, email, password, access_token";
