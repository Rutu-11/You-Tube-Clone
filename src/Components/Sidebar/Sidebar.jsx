import React from 'react'
import "./_sidebar.scss";

import { MdSubscriptions, MdExitToApp, MdThumbUp, MdHistory, MdLibraryBooks, MdHome, MdSentimentSatisfied, MdSentimentDissatisfied } from 'react-icons/md';
const Sidebar = () => {
  return (
    <nav className='border border-danger sidebar' >
        <li>
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


        <li>
          <MdSentimentDissatisfied size={23} />
          <span>I Don't Know</span>
        </li>

          <hr />
        <li>
          <MdExitToApp size={23} />
          <span>Log Out</span>
        </li>

          <hr />
        {/* <li>
          <MdHome size={23} />
          <span>Home</span>
        </li> */}
        
    </nav>
  )
}

export default Sidebar