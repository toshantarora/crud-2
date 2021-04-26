import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const Form = () => {
  let history = useHistory();


  const [cities, changeCities] = useState([]);
  const [rating, changeRating] = useState("");
  const [cuisine, changeCuisine] = useState("");

  const citiesList = [
    {name: "Chandigarh", value: "Chandigarh"},
    {name: "Delhi", value: "Delhi"},
    {name: "Gurugram", value: "Gurugram"},
  ]

 const changeCitiesArray = (val) => {
   const stateCities = cities;
   const index = stateCities.indexOf(val);
   
   if(index === -1) {
     stateCities.push(val)
   } else {
     stateCities.splice(index, 1)
   }

   changeCities(stateCities)
}

const handleSubmit = (e) => {
  e.preventDefault();
  const res = {
    cities: cities,
    rating: rating,
    cuisine: cuisine
  }
  // console.log(res);
  localStorage.setItem("userData", JSON.stringify(res));
  history.push("list")
}

  return (
    <div className="App">
      <h1>Choice Of Food</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>FOOD:</label>
            <label>
              Italian
              <input
                type="radio"
                name="food"
                value="Italian"
                checked={cuisine === "Italian"}
                onChange={(e) => changeCuisine("Italian")}
              />
            </label>
            <label>
              <input
                type="radio"
                name="food"
                value="Chinese"
                checked={cuisine === "Chinese"}
                onChange={(e) => changeCuisine("Chinese")}
              />
              Chineese
            </label>
          </div>
          <lable>City : {cities.join(", ")} </lable> <br />
          {citiesList.map((city, key) => (
            <label key={key}>
              {city.name}
              <input
                type="checkbox"
                value={city.name}
                onChange={(e) => changeCitiesArray(city.name)}
              />
            </label>
          ))}
          <label>
            Rating:
              {rating}
              <select
                value={rating}
                onChange={(e) => changeRating(e.target.value)}
              >
                {[1,2,3,4,5].map((rating, key) => (
                  <option key={key} >
                    {rating}
                  </option>
                ))}
              </select>
          </label>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
