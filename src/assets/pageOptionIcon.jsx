const PageOptionIcon = ({dropped, setDropped}) =>{
    return(
        <svg onClick={()=>setDropped(!dropped)} xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4">
            <g id="Group_408" data-name="Group 408" transform="translate(-359 -1135)">
                <circle id="Ellipse_261" data-name="Ellipse 261" cx="2" cy="2" r="2" transform="translate(359 1135)" fill="#787878"/>
                <circle id="Ellipse_262" data-name="Ellipse 262" cx="2" cy="2" r="2" transform="translate(365 1135)" fill="#787878"/>
                <circle id="Ellipse_263" data-name="Ellipse 263" cx="2" cy="2" r="2" transform="translate(371 1135)" fill="#787878"/>
            </g>
        </svg>

    )
}
export default PageOptionIcon