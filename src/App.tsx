import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './App.sass';
import { Dialog } from './components/common/Dialog';

const GET_ALL_USER = gql`
  query {
    getAllUsers {
      _id
      username
      email
    }
  }
`;
interface IUser {
  _id: string;
  email: string;
  username: string
}
const App: React.FC = () =>  {
  const { data, loading, error } = useQuery(GET_ALL_USER);
  if(loading) return <div>loading...</div>;
  console.log(data.getAllUsers);
  return (
    <div>
      <ul>
        {
          data.getAllUsers.map((user: IUser) => (
            <li key={user._id}>
              {user._id} - {user.email} - {user.username} 
            </li>
          ))
        }
      </ul>
      <div>
        <Dialog />
      </div>
    </div>
  );
}

export default App;
