import Avatar from '../../assets/png/avatar.png'
import SuggestedListings from '../utils/listings'
import PurpleButton from './button'

const Listings = () =>{
    return(
        <div className="listings">
            {
                SuggestedListings.map((listing)=>{
                    return<div className="listing">
                        <div className="orderProfile">
                            <img src={listing.avatar} alt="" />
                        </div>
                        <div className="orderDetails">
                            <div className="top">
                                <div className="details">
                                    <h4>
                                        {
                                            listing.orderType
                                        }
                                    </h4>
                                    <p>
                                        {
                                            listing.storeName
                                        }
                                    </p>
                                </div>
                                <PurpleButton textSize='10px' buttonText='Order'/>
                            </div>
                            <div className="bottom">
                                <p>
                                    {
                                        listing.orderCount
                                    }
                                </p>
                                <div className="loadingDiv">
                                    <div className="loading"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            
            }
            
        </div>
)
}
export default Listings