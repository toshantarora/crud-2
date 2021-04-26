import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Edit from "../assets/img/editpic.png";
import Delete from "../assets/img/deletepic.png";
import Cancel from "../assets/img/cancel.png";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const List = () => {
  const classes = useStyles();

  const [cities, changeCities] = useState([]);
  const [rating, changeRating] = useState("");
  const [cuisine, changeCuisine] = useState("");

  const citiesList = [
    {name: "Chandigarh", value: "Chandigarh"},
    {name: "Delhi", value: "Delhi"},
    {name: "Gurugram", value: "Gurugram"},
  ]

 const changeCitiesArray = (val) => {
   const stateCities = [...cities];
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
  localStorage.setItem("userData", JSON.stringify(res));
}

  useEffect(() => {
    getData();
  }, []);

  ///get data from local Storage
  const getData = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    changeCities(userData.cities);
    changeRating(userData.rating);
    changeCuisine(userData.cuisine);
  };


  //updateValue()
  const updateValue = (e) =>{
    e.preventDefault();
    const res = {
      cities: cities,
      rating: rating,
      cuisine: cuisine
    }
    console.log(res);
    localStorage.setItem("userData", JSON.stringify(res));
    // localStorage.setItem("userData",JSON.stringify(userData))
    alert('Data updated successfully')
    setIsOpen(false)
  }
  //Modal

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const DeleteButton = (index) => {

  //   alert("Do you want to delete ??");
  //   let deleteRow = JSON.parse(localStorage.getItem("userData"));
  //   deleteRow.splice(index,1);
  //   localStorage.setItem("userData", JSON.stringify(deleteRow))
  // }

  return (
    <div>
      <div>
        <h1>List</h1>

        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Food</StyledTableCell>
                  <StyledTableCell align="right">Rating</StyledTableCell>
                  <StyledTableCell align="right">City</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {cuisine}
                  </StyledTableCell>
                  <StyledTableCell align="right">{rating}</StyledTableCell>
                  <StyledTableCell align="right">{cities}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button type="submit" onClick={openModal}>
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={Edit}
                        alt="edit"
                      />
                    </button>

                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    > 
                     <form onSubmit={updateValue}>
                      <div>
                        
                      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                        Edit User Details
                      </h2>
                    
                        <label>FOOD:</label>
                        <label>
                          <input
                            type="radio"
                            name="food"
                            value="Italian"
                            checked={cuisine === "Italian"}
                            onChange={(e) => changeCuisine("Italian")}
                          />
                          Italian
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
                            checked={cities.includes(city.name)}
                            onChange={(e) => changeCitiesArray(city.name)}
                          />
                        </label>
                      ))}
                      <div>
                      <label>
                        Rating:
                        {rating}
                        <select
                          value={rating}
                          onChange={(e) => changeRating(e.target.value)}
                        >
                          {[1, 2, 3, 4, 5].map((rating, key) => (
                            <option key={key}>{rating}</option>
                          ))}
                        </select>
                      </label>
                      </div>
                      <div>
                        <input type="submit" value="Submit" />
                      </div>
                     
                        <button onClick={closeModal}>close</button>
                      </form>
                    </Modal>
                    <button type="submit">
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={Delete}
                        alt="delete"
                      />
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default List;
