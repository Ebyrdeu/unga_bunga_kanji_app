import {type DefaultSession} from 'next-auth';

declare module 'next-auth' {

  interface User {
    id: string,
    role: 'PEASANT' | 'ADMIN';
    userLevel: number;
    address: string;
    email: string;
    name: string;
    image: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
