// import React,{useState} from 'react'
// import '../App.css'
// const Form = () => {

//     const [userData, setUserData] = useState([ city, rating]);
//     // const [food, setFood] = useState('Italian');

//     const [city] =useState([
//         {name:"Mohali", key="1", label="Mohali"},
//         {name:"Chandigarh", key="2", label="Chandigarh"},
//         {name:"Panchkula", key="3", label="Panchkula"}

//     ])

//     const [rating] = useState([
//           { label: "5",value: 5},
//           { label: "4", value: 4 },
//           { label: "3", value: 3 },
//           { label: "2", value: 2 },
//           { label: "1", value: 1 }
//     ])

//     const handleChange = (e) => {
//        setUserData(userData => ({...userData, [e.target.value] : e.target.name}))
//     }

//     const addButton = (e) => {
//         e.preventDefault();
//     }
//     return (
//         <div className="App">
//             <div><h1>Choice of Food</h1></div>
//             <div>
//                 <form onSubmit={(e) => addButton(e)}>
//                     <div>
//                         <label>Food :</label>
//                            <label>

//                               <input type="radio" name="food"></input>
//                                   Italian 
//                             </label>
//                             <label>
//                               <input type="radio" name="food"></input>
//                                   Chineese 
//                             </label>
//                     </div>
//                     <div>
//                         <label>Rating : </label>
//                           <select name="rating" onChange={ e => handleChange(e)}>
//                               {
//                                   userData.map((item,index) => {
//                                       return(
//                                           <option key={index} value={item.value}>
//                                               {item.label}
//                                           </option>
//                                       )
//                                   })
//                               }
//                           </select>
//                     </div>
//                     <div>
//                         <label>City : </label>
//                            <label>
//                                <input type="checkbox" name="mohail"></input>
//                                    Mohali
//                            </label>   
//                     </div>
//                     <div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Form
