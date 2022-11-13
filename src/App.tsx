import React from 'react';
import './App.css';
import { ImageCell, NumberCell, PointCell, Row, List } from './Components';
import data from './data.json';

interface User {
  userID: string;
  picture: string;
  displayName: string;
  score: number;
  order?: number;
}

function App() {
  const [users, setUsers] = React.useState<Array<User>>(data);
  const [updatedUser, setUpdatedUser] = React.useState<User | undefined>(undefined);

  setTimeout(() => {
    const changeIndex = Math.floor(Math.random() * users.length);
    const newScore = users[changeIndex].score + Math.floor(Math.random() * 1000);
    setUpdatedUser({ ...users[changeIndex], score: newScore});
  }, 200);

  React.useEffect(() => {
    if (updatedUser) {
      const updatedUsers = users.map((user: User) => {
        if (user.userID === updatedUser.userID) {
          return updatedUser;
        }
        return user;
      }).sort((u1: User, u2: User) => (u2.score - u1.score)).map((user: User, index: number) => ({ ...user, order: index + 1 }));

      const orderedUsers = users.map((user: User) => {
        const foundUser = updatedUsers.find((u: User) => user.userID === u.userID);
        if (foundUser) {
          return foundUser;
        }
        return user;
      });

      setUsers(orderedUsers);
    }
  }, [updatedUser]);

  return (
    <List>
      {users.map((user: User, index: number) => {
        return (
          <Row key={index} order={user.order || index}>
            <NumberCell>{user.order || (index + 1)}</NumberCell>
            <ImageCell picture={user.picture} />
            <div>{user.displayName}</div>
            <PointCell>{user.score}</PointCell>
          </Row>
        );
      })}
    </List>
  );
}

export default App;
