import ForwardIcon from "../../assets/forwardIcon"
import SavedStroke from "../../assets/savedStroke"
import PostFeed from "../utils/postFeed"
import Comment from '../../assets/comment'
import Heart from '../../assets/heart'

const Post = ({post}) =>{
    return(
        <div className="post">
            <div className="postImage">
                <img src={post.postImage} alt="" />
            </div>
            <div className="postDetails">
                <div className="top">
                    <div className="left">
                        <img src={post.avatar} alt="" />
                    </div>
                    <div className="right">
                        <h3>
                            {
                                post.name
                            }
                        </h3>
                        <div className='rightBottom'>
                            <p className="comp">
                                {
                                    post.location
                                }
                            </p>
                            <p className="comp">
                                11hr ago
                            </p>
                            <p className="comp">
                                {
                                    post.likeCount + ' '
                                }
                                Likes
                            </p>
                            <p className="comp">
                                20 Replies
                            </p>
                        </div>
                    </div>
                </div>
                <p className="postText">
                    {
                        post.postText
                    }
                </p>
                <div className="commentSection">
                    <div className="section">
                        <h6>
                            View all comments
                        </h6>
                        <div className="sectionTop">
                            <div className="sectionLeft">
                                <img src={post.avatar} alt="" />
                            </div>
                            <div className="sectionRight">
                                <h6>
                                    {
                                        post.name
                                    }
                                </h6>
                                <p>
                                    Last seen 11hr
                                </p>
                                <div className="sectionPostText">
                                    <p>
                                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="postActions">
                    <div className="left">
                        <Heart />
                        <Comment />
                        <SavedStroke />
                    </div>
                    <ForwardIcon />
                </div>
            </div>
        </div>
    )
}
export default Post