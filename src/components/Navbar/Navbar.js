import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function GoToHome() {
    navigate("/");
  }

  function GoToForm() {
    navigate("/form");
  }

  return (
    <div className="flex flex-row justify-between m-3">
      <img
        src="https://thumbs.dreamstime.com/b/jpg-letter-initial-logo-design-vector-illustration-letter-initial-logo-design-vector-illustration-jpg-letter-initial-logo-design-236630510.jpg"
        width={70}
      ></img>
      <div className="flex">
        <a className="mx-2 cursor-pointer" onClick={GoToHome}>
          Employee Dashboard
        </a>
        <a className="mx-2 cursor-pointer" onClick={GoToForm}>
          Employee Form
        </a>
      </div>
    </div>
  );
};

export default Navbar;
