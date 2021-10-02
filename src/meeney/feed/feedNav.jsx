import { useState } from "react"
import FeedIcon from "../../assets/feedIcon"
import GalleryIcon from "../../assets/galleryIcon"
import ReferralIcon from "../../assets/ReferralIcon"
import SavedIcon from "../../assets/savedIcon"
import SettingsIcon from "../../assets/settingsIcon"
import NavFeed from '../utils/feed'

const FeedNav = () =>{
    const [hover, setHover] = useState()
    const [optionIndex, setOptionIndex] = useState()
    return(
        <div className="feedNav">
            <ul>
                {
                    NavFeed.map((nav) => {
                        return <li onMouseEnter = {()=>{
                            setOptionIndex(NavFeed.indexOf(nav))
                        }}
                        onMouseLeave = {
                        ()=> {
                            setOptionIndex(null)
                        }
                        }>
                            {<nav.icon fill = {optionIndex === NavFeed.indexOf(nav) ? '#FBB03B' : 'white'} />}
                        <   span>{nav.title}</span>
                        </li>   
                        }
                    )
                }
                
            </ul>
        </div>
    )
}
export default FeedNav