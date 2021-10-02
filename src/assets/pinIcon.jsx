const PinIcon = ({setToArchived, archived, fill}) =>{
    return(
        <svg onClick={()=>{
            setToArchived(!archived)
            }} xmlns="http://www.w3.org/2000/svg" width="10.583" height="15.593" viewBox="0 0 10.583 15.593">
            <path id="Icon_metro-pin" data-name="Icon metro-pin" d="M17.632,15.1l-5.2-3A1.335,1.335,0,1,0,11.093,14.4l5.2,3A1.335,1.335,0,0,0,17.632,15.1ZM13.34,11.847l4.048,2.337,1.377-3.831-2.8-1.613Zm-2.984,9.842,3.872-4.7-1.735-1ZM20.437,8.234l-3.469-2a1,1,0,1,0-1,1.735l3.469,2a1,1,0,1,0,1-1.735Z" transform="translate(-10.356 -6.096)" fill={fill || "#490057"}/>
        </svg>
    )
}
export default PinIcon