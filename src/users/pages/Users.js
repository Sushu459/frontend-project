import React from 'react';

// Importing the UsersList component
import UsersList from '../components/UsersList';

const Users = () => {
  // Hardcoded array of users
  const USERS = [
    {
      id: 'u1',
      name: 'Sushmanth',
      image:
        'https://raw.githubusercontent.com/Sushu459/my-photos/main/profile.jpg',
      places: 3,
    },
  ];

  // Passing USERS as props to UsersList
  return <UsersList items={USERS} />;
};

export default Users;
