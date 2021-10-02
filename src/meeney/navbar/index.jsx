import Meene from "../../assets/meene"
import profilePic from '../../assets/png/profilePic.png'
import flag from '../../assets/png/flag.png'
import './index.scss'
import { useState } from "react"
import MsgIcon from "../../assets/msgIcon"
import Bell from "../../assets/bell"
import SearchIcon from "../../assets/searchIcon"
const Navbar = () =>{
    const [toggleArrow, setToggleArrrow] = useState(false)
    const msgCount = 20
    const notificationCount = '50+'
    return(
        <div className="navContainer">
            <div className="circleOne"></div>
            <div className="circleTwo"></div>
            <div className="container">
                <div className="navBarProfileDetails">
                    <div className='imgDiv'>
                        <img src={profilePic} alt="profile picture" />
                    </div>
                    <p onClick={()=> setToggleArrrow(!toggleArrow)}><span className={`${toggleArrow && 'toggleArrow'}`}>></span> Jonathan Doe</p>
                </div>
                <div className="rightNavOptions">
                    <div className="icon">
                        <img className='icon' src={flag} alt="" width='100%'/>
                    </div>
                    <div className='icon'>
                        <MsgIcon />
                        <div className="count">
                            {msgCount}
                        </div>
                    </div>
                    <div className="icon">
                        <Bell />
                        <div className="count">
                            {notificationCount}
                        </div>
                    </div>
                    <div className="searchDiv ">
                        <SearchIcon />
                        <input type="text" placeholder='Search'/>
                    </div>
                    <div className="logo">
                        <Meene />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar