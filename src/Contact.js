import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./component/header";

function Contact() {
  const navigate = useNavigate();

  function gotoContactPage() {
    navigate("/");
  }

  return (
    <>
      <div>
        <h1>This is Contact Page</h1>
        <button onClick={() => gotoContactPage()}>Go TO Home Page</button>
      </div>
    </>
  );
}

export default Contact;
