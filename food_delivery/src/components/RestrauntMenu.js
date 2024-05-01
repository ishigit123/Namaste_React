import { useEffect } from "react";
const RestrauntMenu = () =>{
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async()=>{
        const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=28.3670355&lng=79.4304381');
        const json = await data.json();
        console.log(json);
    };
    return(
        <div className="res-menu"> 
            {console.log("rendered")}
         <div className="res-menu-details">
          <h2>Name</h2>
          <p>Cuisines:</p>
          <p>Rating:</p>
          <p>Delivery Time:</p>
        </div>
        <div className="toggle-buttons">
        <button className="veg-btn">Veg</button>
        <button className="nonveg-btn">Non-Veg</button>
      </div>
      <div className="menu-items">
        <ul>
            <li>Biryani</li>
            <li>250</li>
        </ul>
      </div>
        </div>
    )
};
export default RestrauntMenu;