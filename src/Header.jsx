import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { CgHomeAlt } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    // show login/signup
    authenticationLinks = <>
      <a href="/login">Login</a>| 
      <a href="/signup">Signup</a>
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
        <a href="/"><CgHomeAlt />Home</a> |
        <a href="/routines"><GiWeightLiftingUp />My Routines</a> |
        <a href="/login"><BiLogIn />Login</a> |
        <a href="/logout" onClick={handleClick}>
       <BiLogOut /> Logout</a>
      </nav>
    </header>
  );
}
