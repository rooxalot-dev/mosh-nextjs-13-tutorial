import React from "react";

interface IUser {
  id: number;
  name: string;
};

const UsersPage: React.FC = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const users: IUser[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
