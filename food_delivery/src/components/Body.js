import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3670355&lng=79.4304381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const resData = checkJsonData(data);
      setListOfRestaurants(resData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const checkJsonData = (jsonData) => {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (checkData !== undefined) {
        return checkData;
      }
    }
    return [];
  };

  const handleSortByChange = (sortBy) => {
    switch (sortBy) {
      case "top-rated":
        const topRatedData = listOfRestaurants.filter(res => res.info.avgRating > 4.3);
        setListOfRestaurants(topRatedData);
        break;
      case "delivery-time":
        const deliveryTimeData = listOfRestaurants.filter(res => res.info.sla.deliveryTime < 20);
        setListOfRestaurants(deliveryTimeData);
        break;
      default:
        break;
    }
  };

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body-comp">
      <div className="search-filter-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search by restaurants, dish"
        />
        <button className="search-btn">Search</button>
        <select className="sort-by-dropdown" onChange={(e) => handleSortByChange(e.target.value)}>
          <option value="">Sort By</option>
          <option value="top-rated">Top Rated</option>
          <option value="delivery-time">Delivery Time</option>
        </select>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
