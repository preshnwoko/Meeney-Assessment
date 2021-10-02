import PurpleButton from "./button"
import ImageIcon from '../../assets/imageIcon'
import VideoIcon from "../../assets/videoIcon"
import LocationIcon from "../../assets/locationIcon"
import TagIcon from "../../assets/tagIcon"

const createNewPost = () =>{
    return(
        <div className="newPost">
            <div className="top">
                <input type="text" placeholder='Share your moments'/>
                <PurpleButton buttonText='Post' textSize='20px' padding='5px 20px'/>
            </div>
            <div className="bottom">
                <div className="postOptions">
                    <ImageIcon />
                    <span>
                        Add Image
                    </span>
                </div>
                <div className="postOptions">
                    <VideoIcon />
                    <span>
                        Add Video
                    </span>
                </div>
                <div className="postOptions">
                    <LocationIcon />
                    <span>
                        Location
                    </span>
                </div>
                <div className="postOptions">
                    <TagIcon />
                    <span>
                        Tags
                    </span>
                </div>
            </div>
        </div>
    )
}
export default createNewPost