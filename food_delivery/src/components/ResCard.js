import { CDN_URL } from "../utils/constants";
const ResCard=(props) =>{
    const {resdata} = props;
    const{cloudinaryImageId,name,cuisines,sla,avgRating,costForTwo} = resdata?.info; //optional chaining
     return(
         <div className= "res-card">
             <img 
             alt = "res-logo"
             className='res-logo'
             src={
                 CDN_URL + cloudinaryImageId
                 }/>
             <div className='res-info'>
             <h3>{name}</h3>
             <h4>{cuisines.join(" , ")}</h4>
             <h4>{sla.deliveryTime} minutes</h4>
             <h4>{avgRating} stars</h4>
             <h4>{costForTwo}</h4>
             </div>
         </div>
     )
 };
 export default ResCard;