import { useState } from "react"
import Avatar from '../../assets/png/avatar.png'
import Profile from "../utils/profile"

const MyPageTab = () =>{
    const [tab, setTab] = useState('page')
    console.log(Profile)
    return(
        <div className="firstSection">
            <div className="tabs">
                <div onClick={
                    ()=>{
                        setTab('community')
                    }
                } className={`${tab === 'community' && 'active'} tab`}>
                    <p>
                        Community
                    </p>
                </div>
                <div onClick={
                    ()=>{
                        setTab('trend')
                    }
                } className={`${tab === 'trend' && 'active'} tab`}>
                    <p>
                        See what's trending
                    </p>
                </div>
                <div onClick={
                    ()=>{
                        setTab('page')
                    }
                } className={`${tab === 'page' && 'active'} tab`}>
                    <p>
                        My page
                    </p>
                </div>
            </div>
            <div className="tabView">
                <div className="profileDetails">
                    <div className="img">
                        <img src={Profile[0].avatar} alt="" />
                    </div>
                    <div className="profileParagraps">
                        <h1>
                            {
                                Profile[0].name
                            }
                        </h1>
                        <p className="userName">
                            {
                                Profile[0].userName
                            }
                        </p>
                        <p className="bio">
                            {
                                Profile[0].bio
                            }
                        </p>
                    </div>
                </div>
                <div className="profileStats">
                    <div className="count">
                        <div className="countDiv">
                            <h3>
                                {
                                    Profile[0].postCount
                                }
                            </h3>
                            <p>
                                Post
                            </p>
                        </div>
                        <div className="countDiv">
                            <h3>
                                {
                                    Profile[0].followerCount
                                }
                            </h3>
                            <p>
                                Followers
                            </p>
                        </div>
                        <div className="countDiv">
                            <h3>
                                {
                                    Profile[0].followingCount
                                }
                            </h3>
                            <p>
                                Following
                            </p>
                        </div>
                        <div className="countDiv">
                            <h3>
                                {
                                    Profile[0].supportingCount
                                }
                            </h3>
                            <p>
                                Supporting
                            </p>
                        </div>
                    </div>
                    <div className='button'>
                        <p>
                            Following
                        </p>
                    </div>
                    <ul>
                        <h4>
                            Other Pages
                        </h4>
                        <li>
                            Business One
                        </li>
                        <li>
                            Business One
                        </li>
                        <li>
                            Business One
                        </li>
                        <li>
                            Business One
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
export default MyPageTab