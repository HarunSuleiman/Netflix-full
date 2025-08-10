import React from "react";
import "./Header.css";
import Netflixlogo from "../../assets/images/netflix.png";
import SearchIcon from "@mui/icons-material/search";
import NotificationsNoneIcon from "@mui/icons-material/notificationsNone"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img className="logo" src={Netflixlogo} alt="" />
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>TCShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li className="search">
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
