import React from "react";
import { Input, Box,Stack,Button,Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td } from "@chakra-ui/react";
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';
import { useEffect } from "react";
import {getData} from "../redux/action"
import { Link } from "react-router-dom";




const Admin = () => {
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels)

  const [value, setValue] = React.useState('')

  const [category, setCategory] = useState("")
  const [bed, setBed] = useState("")
  const [adult,setAdult] = useState("")
  const [capacity,setCapacity] = useState('')
  const [perNight,setPerNight] = useState("");
  const [img,setImg] = useState("")

  useEffect(() => {
    dispatch(getData())

  },[])
  console.log(hotels)


  const handleSubmit =  () => {

    console.log("ok")
    let payload = {
      category : category,
      image_url : img,
      type_of_room : value,
      bed_type : bed,
      no_of_persons : adult,
      capacity : capacity,
      cost : perNight,
      booked :false,
    }
    axios.post("https://ancient-caverns-16282.herokuapp.com/hotel",payload).then((res) => dispatch(getData())).catch((err) => console.log(err))
    
  }

  const handleDelete = (id) => {
    axios.delete(`https://ancient-caverns-16282.herokuapp.com/hotel/${id}`).then((res) => dispatch(getData()))

  }
  const handleEdit = () => {

  }

  return (
    <div>
      <Box>
        <Box>
          <label>Category </label>
          <select id="" onChange={(e) => {setCategory(e.target.value)}}>
            <option value="">None</option>
            <option value="family">family</option>
            <option value="deluxe">deluxe</option>
            <option value="suite">suite</option>
          </select>
        </Box>
        <br />

        <Box>
          <Input placeholder="Enter Image Link" onChange={(e) => {setImg(e.target.value)}} width="200px"/>
        </Box>

        <Box>
          <label >Room Type</label>
          <RadioGroup onClick={(e) => {
            
            setValue(e.target.value)}
          } value={value}>
            
              <Radio value="AC">AC</Radio>
              <Radio value="non AC">non AC</Radio>
            
          </RadioGroup>
          {/* <select id="" onChange={(e) => {setValue(e.target.value)}}>
            
            <option value="AC">AC</option>
            <option value="non AC">non AC</option>
            
          </select> */}
        </Box>
        <br />

        <Box>
          <label>Bed Type </label>
          <select id="" onChange={(e) => {setBed(e.target.value)}}>
            <option value="">None</option>
            <option value="single">single</option>
            <option value="double">double</option>
          </select>
        </Box>

        <Box>
          <label >No of Adult</label>
          <Input placeholder="No of Adult" size='sm' width={"200px"} onChange={(e) => {setAdult(e.target.value)}}/>
        </Box>
        <br />

        <Box>
          <label >Max capacity</label>
          <Input placeholder="Max capacity" size='sm' width={"200px"} onChange={(e) => {setCapacity(e.target.value)}} />
        </Box>
        <br />

        <Box>
          <label >Cost per night in Rs</label>
          <Input placeholder="Cost per night in Rs" size='sm' width={"200px"} onChange={(e) => {setPerNight(e.target.value)}} />
        </Box>
      </Box>
      <br />
      <Button colorScheme='teal' onClick={handleSubmit}>Submit</Button>

      <Box>
        <h1>Table</h1>
        <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Category</Th>
              <Th>Type of room</Th>
              <Th>Bed type</Th>
              <Th>No of persons</Th>
              <Th>Capacity</Th>
              <Th>Cost</Th>
              <Th>Status </Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {
              hotels?.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.category}</Td>
                  <Td>{item.type_of_room}</Td>
                  <Td>{item.bed_type}</Td>
                  <Td>{item.no_of_persons}</Td>
                  <Td>{item.capacity}</Td>
                  <Td>{item.cost}</Td>
                  <Td>{item.booked}</Td>


                  <Td><Button onClick={() => {handleEdit(item.id)}}>EDIT</Button></Td>
                  <Td><Button onClick={() => {handleDelete(item.id)}}>DELETE</Button></Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

      </Box>
    </div>
  );
};

export default Admin;