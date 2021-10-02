import Add from "../../assets/add"
import SearchIcon from "../../assets/searchIcon"
import MyPage from '../utils/pages'
import Avatar from '../../assets/png/avatar.png'
import PageOptionIcon from "../../assets/pageOptionIcon"
import PinIcon from "../../assets/pinIcon"
import { useState } from "react"
import EditIcon from '../../assets/editIcon'


const MyPages = () =>{
    const [archived, setToArchived] = useState(false)
    const [archivedIndex, setArchivedIndex] =useState()
    const [dropped, setDropped] = useState(false)
    const [droppedIndex, setDroppedIndex] = useState()
    const handleArchived = () =>{
        setToArchived(!archived)
    } 
    console.log(`dropped is ${dropped}`)
    console.log(archived, archivedIndex)
    return(
        <div className="myPages">
            <div className="header">
                <div className="titles">
                    <h3>
                        My Pages
                    </h3>
                    <div className="button">
                        <Add />
                        <span>
                            Create new
                        </span>
                    </div>
                </div>
                <div className="search">
                    <SearchIcon fill = '#787878'/>
                    <input type="text" placeholder='Search Pages'/>
                </div>
            </div>
            <div className="pages">
                {
                    MyPage.map((page)=>{
                    return <div className="page">
                        <div className="profilePic">
                            <img src={page.avatar} alt="" />
                        </div>
                        <div className="pageName">
                            <p>
                                {page.name}
                            </p>
                            <span>
                                {page.pageType}
                            </span>
                        </div>
                        <div className="actionButtons">
                            <svg onClick={()=>{
                                setDroppedIndex(MyPage.indexOf(page))
                                setDropped(!dropped)
                            }} xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4">
                                <g id="Group_408" data-name="Group 408" transform="translate(-359 -1135)">
                                    <circle id="Ellipse_261" data-name="Ellipse 261" cx="2" cy="2" r="2" transform="translate(359 1135)" fill="#787878"/>
                                    <circle id="Ellipse_262" data-name="Ellipse 262" cx="2" cy="2" r="2" transform="translate(365 1135)" fill="#787878"/>
                                    <circle id="Ellipse_263" data-name="Ellipse 263" cx="2" cy="2" r="2" transform="translate(371 1135)" fill="#787878"/>
                                </g>
                            </svg>
                            <svg onClick={()=>{
                                setToArchived(!archived)
                                page.archived = archived
                                setArchivedIndex(MyPage.indexOf(page))      
                            }} xmlns="http://www.w3.org/2000/svg" width="10.583" height="15.593" viewBox="0 0 10.583 15.593">
                            <path id="Icon_metro-pin" data-name="Icon metro-pin" d="M17.632,15.1l-5.2-3A1.335,1.335,0,1,0,11.093,14.4l5.2,3A1.335,1.335,0,0,0,17.632,15.1ZM13.34,11.847l4.048,2.337,1.377-3.831-2.8-1.613Zm-2.984,9.842,3.872-4.7-1.735-1ZM20.437,8.234l-3.469-2a1,1,0,1,0-1,1.735l3.469,2a1,1,0,1,0,1-1.735Z" transform="translate(-10.356 -6.096)" 
                            fill={page.archived?'#FBB03B':"#490057"}/>
                            </svg>
                            {
                                dropped && droppedIndex === MyPage.indexOf(page) ?
                                <div className="dropdown">
                                    <p>
                                        <span>
                                            <PinIcon setToArchived={setToArchived} archived={archived} fill={page.archived?'#FBB03B':null}/>
                                        </span>
                                        <span>
                                            Pin
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <EditIcon />
                                        </span>
                                        <span>
                                            Edit Page
                                        </span>
                                    </p>
                                </div>: null
                            }
                            
                        </div>
                    </div>
                    })
                    
                }
                    
                </div>
        </div>
    )
}
export default MyPages