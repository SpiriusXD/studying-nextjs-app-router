//     The object is :
//     {
//         id: generateId(),
//             address: "Ezel 1 Petach Tikva",
//         rooms: 2,
//         floor: 1,
//         type: "OLD",
//         isCommercial: false,
//         price: 2600
//     }
"use client";

import { generateId } from "@/app/global-services/utils";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";


const Apartment2DB = () => {
  //PROPERTIES
  const [apartments, setApartments] = useState([]); //empty on default - for preventing crushes

  const [newApartment, setNewApartment] = useState({
    id: null,
    address: "",
    rooms: 0,
    floor: 0,
    type: "",
    isCommercial: false,
    price: 0,
  });

  //for edit
  const [editApartment, setEditApartment] = useState(null);
  //FUNCTIONS

  const handleNewApartmentChanges = (ev) => {
    const { name, value, type } = ev.target;
    if (name !== "isCommercial") {
      setNewApartment((previousState) => {
        return {
          ...previousState, //we copying all the object
          [name]: type === "number" ? Number(value) : value,
        };
      });
    } else {
      //handling checkbox
      setNewApartment((previousState) => {
        return {
          ...previousState, //we copying all the object
          [name]: ev.target.checked, //changing only the specific property
        };
      });
    }
  };

  const handleEditApartmentChanges = (ev) => {
    const { name, value, type } = ev.target;

    if (name !== "isCommercial") {
      setEditApartment((previousState) => {
        return {
          ...previousState, //we copying all the object
          [name]: type === "number" ? Number(value) : value, //changing only the specific property
        };
      });
    } else {
      //handling checkbox
      setEditApartment((previousState) => {
        return {
          ...previousState, //we copying all the object
          [name]: ev.target.checked, //changing only the specific property
        };
      });
    }
  };
  const addApartment = async() => {

    await axios.post(`/api/apartment`, newApartment);
    await getData();

    // const temp = [...apartments]; //best practice is to copy the state. since we set new..
    // const apartment = { ...newApartment }; //the same

    // apartment.id = generateId();
    // temp.push(apartment);
    // setApartments(temp);
    // //after pushing we want to clean the new apartment state:
    // setNewApartment({
    //   id: null,
    //   address: "",
    //   rooms: 0,
    //   floor: 0,
    //   type: "",
    //   isCommercial: false,
    //   price: 0,
    // });
  };

  const updateApartment = async () => {
    // editApartment

   await axios.put(`/api/apartment`, editApartment).then(res=>{
        console.log("updated finished");
        
    });

    // console.log("Hi updated");
    

    // const temp = [...apartments];//best practice is to copy the state. since we set new..
    // const apartmentIdx = temp.findIndex(item => editApartment.id === item.id);//getting the old data

    // // apartment.id = generateId();//not need here...

    // // temp.push(apartment);//instead to push - we updating
    // temp[apartmentIdx] = editApartment;
    await getData();
    //setApartments(temp); //updating the data again.
    //after pushing we want to clear the update mode:
    setEditApartment(null);
  };

  const removeApartment = async(id) => {

    await axios.delete(`/api/apartment`, {data: {id: id}});
    //let temp = [...apartments];
    await getData();
    //setApartments(temp);
  };

  const getData = async () => {
    const res = await axios.get(`/api/apartment-db`);
    //the response contains additional values
    const data = res.data;
    setApartments(data);
  };

  //EFFECTS
  useEffect(() => {
    // setApartments(mockData);

    //instead of getting the mockData, we refer to the server
    //see we define it inside effect and than call it since it's async

    getData();
  }, []);

  console.log("apartments = ", apartments);

  return (
    <>
      <Box component={"div"}>
        <h3>Apartment inner CRUD example</h3>
        <p>We use only inner state without passing data as props. </p>
        <p>I use here very simple component, just for quick example. </p>
        <p>We can do it with advanced component like card or table.</p>

        <h3>All Apartments: </h3>

        {apartments.map((item) => {
          return (
            <div key={item.id}>
              <p>
                ID = {item.id} | {item.address}, {item.rooms} rooms, floor{" "}
                {item.floor}, type is {item.type},{" "}
                <b>
                  {item.isCommercial
                    ? "Allowed for Commercial use"
                    : "Only for private use"}
                </b>
                , &nbsp;
                {item.price}$
              </p>
              <Box component={"div"}>
                <IconButton
                  onClick={() => {
                    console.log("hi");
                    setEditApartment(item);
                  }}
                  color="info"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="warning"
                  onClick={() => removeApartment(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
              <hr />
            </div>
          );
        })}
        {/*{
        id: generateId(),
        address: "HA'Ary 5",
        rooms: 5,
        floor: 1,
        type: "OLD",
        isCommercial: false,
        price: 2600
    },*/}
        {!editApartment ? (
          <>
            <h3>Add Apartments</h3>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              sx={{
                "& .MuiTextField-root": {
                  width: 500,
                },
                alignItems: "flex-start",
              }}
            >
              {/*The input of mui*/}
              <TextField
                variant={"outlined"}
                label={"Address"}
                value={newApartment.address}
                name="address"
                onChange={handleNewApartmentChanges}
              />

              <TextField
                variant={"outlined"}
                label={"Price"}
                value={newApartment.price}
                name="price"
                onChange={handleNewApartmentChanges}
                type="number"
              />

              <TextField
                variant={"outlined"}
                label={"Structure Type"}
                value={newApartment.type}
                name="type"
                onChange={handleNewApartmentChanges}
              />
              <TextField
                variant={"outlined"}
                label={"Rooms"}
                value={newApartment.rooms}
                name="rooms"
                onChange={handleNewApartmentChanges}
                type="number"
              />

              <TextField
                variant={"outlined"}
                label={"Floor"}
                value={newApartment.floor}
                name="floor"
                onChange={handleNewApartmentChanges}
                type="number"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={newApartment.isCommercial}
                    name="isCommercial"
                    onChange={handleNewApartmentChanges}
                  />
                }
                label="Commercial Property"
              />

              <Button onClick={addApartment} variant={"contained"}>
                Add Apartment
              </Button>
            </Box>{" "}
          </>
        ) : (
          <>
            <Box component={"h3"} color="warning.main">
              Edit this apartment
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              sx={{
                "& .MuiTextField-root": {
                  width: 500,
                },
                alignItems: "flex-start",
              }}
            >
              {/*The input of mui*/}
              <TextField
                variant={"outlined"}
                label={"Address"}
                value={editApartment.address}
                name="address"
                onChange={handleEditApartmentChanges}
              />
              <TextField
                variant={"outlined"}
                label={"Price"}
                value={editApartment.price}
                name="price"
                onChange={handleEditApartmentChanges}
                type="number"
              />
              <TextField
                variant={"outlined"}
                label={"Structure Type"}
                value={editApartment.type}
                name="type"
                onChange={handleEditApartmentChanges}
              />
              <TextField
                variant={"outlined"}
                label={"Rooms"}
                value={editApartment.rooms}
                name="rooms"
                onChange={handleEditApartmentChanges}
                type="number"
              />

              <TextField
                variant={"outlined"}
                label={"Floor"}
                value={editApartment.floor}
                name="floor"
                onChange={handleEditApartmentChanges}
                type="number"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={editApartment.isCommercial}
                    name="isCommercial"
                    onChange={handleEditApartmentChanges}
                  />
                }
                label="Commercial Property"
              />

              <Button
                onClick={updateApartment}
                color="info"
                variant={"contained"}
              >
                Update Apartment
              </Button>
            </Box>{" "}
          </>
        )}
      </Box>
    </>
  );
};

export default Apartment2DB;
