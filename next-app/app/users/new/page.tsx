import React from 'react';

const NewUserPage: React.FC = () => {
  return (
    <div>
      <h1>Create a New User</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default NewUserPage;
