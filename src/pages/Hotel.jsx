import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from "../redux/action";
import {Button} from "@chakra-ui/react";
import { useState } from 'react';


const Hotel = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels) 

  const[data, setData] = useState(hotels)

  useEffect(() => {
    dispatch(getData())

  },[])

  console.log(hotels)
  

  
  return (
    <div>
      <div>
        <label>SORT BY</label>
        <Button >Low to High </Button>
        <br /><Button >High to Low </Button>
      </div>
      <div style={{display:"flex", justifyContent : "space-around", gap: "20px"}}>
        {
          hotels.map((item) => (
            <div key={item.id}>
              <img src="https://stylesatlife.com/wp-content/uploads/2019/12/latest-bed-designs-in-2020.jpg.webp" alt="" />

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