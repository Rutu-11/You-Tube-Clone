import React from "react";
import "./_sidebar.scss";
import { useDispatch } from "react-redux";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentSatisfied,
  MdSentimentDissatisfied,
  MdLogout,
  MdLogin
} from "react-icons/md";


import { log_out } from "../../Redux/Actions/Auth.Action";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebar, handleSidebar }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const logOutHandler = () => {
    dispatch(log_out());
  };
  return (
    // conditional class to handle toggle of menu  && event to toggle side or clicking each li
    <nav
      className={sidebar ? "sidebar open" : "sidebar close"}
      onClick={() => handleSidebar(false)}
    >
      <li onClick={()=>{navigate('/') }} >
        <MdHome size={23} />
        <span>Home</span>
      </li>

      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>

      <hr />

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      {/* <li>
          <MdSentimentSatisfied size={23} />
          <span>Home</span>
        </li> */}

     

      <hr />
      <li onClick={()=>{navigate('/auth') }} >
        <MdLogin size={23} />
        <span>Login</span>
      </li>

      <li  onClick={logOutHandler}>
        <MdLogout size={23} />
        <span>Logout</span>
      </li>
      <hr />
      {/* <li>
          <MdHome size={23} />
          <span>Home</span>
        </li> */}
    </nav>
  );
};

export default Sidebar;
