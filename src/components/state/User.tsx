import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Nitesh",
      email: "ntudu040@gmail.com",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
      //now that we have done the type assertion we don't have to use the
      optional chaning
    </div>
  );
};
// <div>User name is {user?.name}</div>
// <div>User email is {user?.email}</div>
