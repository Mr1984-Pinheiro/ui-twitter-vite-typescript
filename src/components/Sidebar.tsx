import "./Sidebar.css"
import twitterLogo from "../assets/logo.twitter.svg"
import { 
    House, 
    Hash, 
    Bell,
    Envelope, 
    BookmarkSimple, 
    FileText,
    User, 
    DotsThreeCircle,
    Pencil
    } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Sidebar () {
    return(
        <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="logo" />

        <nav className='main-navigation'>
          <NavLink to="/">
            <House weight='fill' />
            <span>Home</span>
          </NavLink>
          <a href="">
            <Hash /> 
            <span>Explore</span>
          </a>
          <a href="">
            <Bell />
            <span>Notifications</span>
          </a>
          
          <NavLink to="/status">
            <Envelope />
            <span>Messages</span>
          </NavLink>
         
          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span>
          </a>
          <a href="">
            <FileText />
            <span>Lists </span>
          </a>
          <a href="">
            <User />
            <span>Profile</span>
          </a>
          <a href="">
            <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>

        <button className='new-tweet' type="button">
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
    )
}