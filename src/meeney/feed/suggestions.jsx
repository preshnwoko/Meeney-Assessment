import { useState } from "react"
import SavedIcon from "../../assets/savedIcon"
import SavedStroke from "../../assets/savedStroke"
import SuggestedPages from "../utils/suggestedPages"
import PurpleButton from "./button"


const Suggestions = () =>{
    const [tab, setTab] = useState('pages')
    return(
        <div className="suggestions">
            <div className="tabs">
                <div onClick={()=>setTab('users')} className={`${tab === 'users' && 'active'} users`}>
                    <p>
                        Suggested Users
                    </p>
                </div>
                <div onClick = {()=>setTab('pages')} className={`suggestedPages ${tab === 'pages' && 'active'}`}>
                    <p>
                        Suggested Pages
                    </p>
                </div>
            </div>
            {
                tab === 'pages' &&
                <div className="listings tabView">
                    {
                        SuggestedPages.map((suggestedPage)=>{
                            return<div className="page">
                            <div className="left">
                                <div className="img">
                                    <img src={suggestedPage.avatar} alt="" />
                                </div>
                                <div>
                                    <h4>
                                        {
                                            suggestedPage.name
                                        }
                                    </h4>
                                    <p>
                                        {
                                            suggestedPage.location
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="right">
                                <PurpleButton buttonText = 'Support' textSize='12px'/>
                                <SavedStroke ml={'auto'}/>
                            </div>
                        </div>
                        })
                    }
                    
                </div>
            }
        </div>
    )
}
export default Suggestions