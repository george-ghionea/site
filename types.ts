
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}
