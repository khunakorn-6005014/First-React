import React, { useState, createContext, useContext } from 'react';

// Create a Context
const UserContext = createContext("");

// Parent Component
const HookContext = () => {
  const [user, setUser] = useState('Daniel');
  
  return (
    <UserContext.Provider value={user}>
      <Component1 />
    </UserContext.Provider>
  );
};

// Component1
const Component1 = () => {
  return (
    <>
      <Component2 />
      <UserContext.Consumer>
        {value => <p>Hey {value}</p>}
      </UserContext.Consumer>
    </>
  );
};

// Component2
const Component2 = () => {
  const value = useContext(UserContext);
  return <p>Good morning, {value}!</p>;
};

export default HookContext;
