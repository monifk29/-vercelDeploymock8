import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from "../redux/action";
import {Button} from "@chakra-ui/react";
import { useState } from 'react';


const Hotel = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels) 

  const[data, setData] = useState(hotels)


  const desc = () => {
    let sortdata = hotels.sort((a, b) => {
      return a.cost - b.cost;
    });

    setData([...sortdata]);
  }
  const asc = () => {
    let sortdata = hotels.sort((a, b) => {
      return b.cost - a.cost;
    });

    setData([...sortdata]);
  }

  useEffect(() => {
    dispatch(getData())

  },[])

  console.log(hotels)
  

  
  return (
    <div>
      <div>
        <label>SORT BY</label>
        <Button onClick = {asc}>Low to High </Button>
        <br /><Button onClick={desc} >High to Low </Button>
      </div>
      <div style={{display:"flex", justifyContent : "space-around", gap: "20px"}}>
        {
          hotels.map((item) => (
            <div key={item.id}>
              <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

              <h3>Adult:  {item.no_of_persons}</h3>
              <h3>Capacity:  {item.capacity}</h3>
              <h3>Bed Type:  {item.bed_type}</h3>
              <h3>Price:  {item.cost}</h3>



            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Hotel