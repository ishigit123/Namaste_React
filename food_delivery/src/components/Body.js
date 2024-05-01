import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
const Body = () => {
  const [updatedList, setUpdatedList] = useState(resList);
 
  useEffect(()=>{fetchData},[]);
  const fetchData = async() =>{
    const data = await fetch("");
    const json = await data.json;
  }
  return (
    <div className="body-comp">
      <div className="search-filter-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search by restraunts,dish"
        />
        <button className="search-btn">Search</button>
        {/* Filter by Ratings */}
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("clicked");
            const filteredData = updatedList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setUpdatedList(filteredData);
          }}
        >
          Top Rated
        </button>
        {/* Filter by delivery time */}
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("clicked");
            const filteredData = updatedList.filter(
              (res) => res.info.sla.deliveryTime < 20
            );
            setUpdatedList(filteredData);
          }}
        >
          Delivery Time
        </button>
      </div>
      <div className="res-container">
        {updatedList.map((restraunt) => (
          <ResCard resdata={restraunt} key={restraunt.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
