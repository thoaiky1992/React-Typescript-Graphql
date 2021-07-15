import { gql } from "@apollo/client";

export const FETCH_CURRENT_USER = gql`
  query {
    fetchUser {
      _id
      email
      username
      avatar
      timestamps
      created_at
      updated_at
      deleted_at
    }
  }
`;