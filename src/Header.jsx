import { LogoutLink } from "./LogoutLink";
import axios from "axios";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    // show login/signup
    authenticationLinks = <>
      <a href="/login">Login</a>| <a href="/signup">Signup</a>
    </>
  } else {
    // show logout
    authenticationLinks = <LogoutLink />
  }
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  };

  return (
    <header>
      <nav>
        <a href="/">Home</a> | 
        <a href="/login" onClick={handleClick}>
      Logout
    </a>
      </nav>
    </header>
  );
}
