import { gql } from '@apollo/client';

export interface UserInput {
  email: String
  username: String
  password: String
}
interface User {
  _id: string
  email: string
  username: string
  avatar: string;
  timestamps: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
export interface PayloadLoginInput {
  email: String;
  password: String
}
export interface ResLogin {
  access_token: string,
  user: User
}
export const CREATE_USER = gql`
  mutation createUser($userDto: UserInput!) {
    createUser(userDto: $userDto) {
      _id
      email
      username
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($loginDto: PayloadLoginInput!) {
    login(loginDto: $loginDto) {
      access_token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;
