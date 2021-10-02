const FeedIcon = ({fill}) =>{
    return(
        <svg id="rss_feed-24px" xmlns="http://www.w3.org/2000/svg" width="28.941" height="28.941" viewBox="0 0 28.941 28.941">
  <path id="Path_107" data-name="Path 107" d="M0,0H28.941V28.941H0Z" fill="none"/>
  <circle id="Ellipse_5" data-name="Ellipse 5" cx="2.629" cy="2.629" r="2.629" transform="translate(4.824 18.86)" fill={fill || "#fff"}/>
  <path id="Path_108" data-name="Path 108" d="M4,4.44V7.853A15.352,15.352,0,0,1,19.351,23.2h3.413A18.769,18.769,0,0,0,4,4.44Zm0,6.825v3.413A8.533,8.533,0,0,1,12.526,23.2h3.413A11.935,11.935,0,0,0,4,11.265Z" transform="translate(0.824 0.914)" fill={fill || "#fff"}/>
</svg>

    )
}
export default FeedIcon