import { useState } from "react";

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleClick}>Logout</button>
      ) : (
        <button onClick={handleClick}>Login</button>
      )}
    </div>
  );
}

export default LoginLogout;
