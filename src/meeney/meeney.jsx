import Navbar from "./navbar"
import './meeney.scss'
import { Switch } from "react-router"
import SwitchAccount from "./feed/switch"
import FeedNav from "./feed/feedNav"
import MyPage from "./feed/myPage"
import Listings from "./feed/listings"
import Suggestions from "./feed/suggestions"
import MyPageTab from "./feed/myPageTab"
import NewPost from "./feed/newPosts"
import PostFeed from "./utils/postFeed"
import Post from "./feed/newPost"

const Meeney = () =>{
    return(
        <div className='body'>
            <Navbar />
            <div className="feed">
                <div className="container">
                    <div className="left">
                        <SwitchAccount />
                        <FeedNav />
                        <MyPage />
                    </div>
                    <div className="center">
                        <MyPageTab />
                        <createNewPost />
                        <div className="posts">
                            {
                                PostFeed.map((post)=>{
                                    return <Post post = {post} />
                                })
                            }
                        </div>

                    </div>
                    <div className="right">
                        <h3>
                            Suggested Listings
                        </h3>
                        <Listings />
                        <Suggestions />
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}
export default Meeney