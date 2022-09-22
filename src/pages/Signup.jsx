import React from 'react'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,

  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link } from 'react-router-dom';
//   import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Signup = () => {

    let signup =  JSON.parse(localStorage.getItem("m8-signup"))  || []
  
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleClick = () => {
        console.log(email,password);

        let data = {
            email,
            password
        }

        signup.push(data);

        localStorage.setItem("m8-signup",JSON.stringify(signup));

        alert("Signup Success")
    }
    

    const [showPassword, setShowPassword] = useState(false);

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                {/* <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box> */}
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e) => {setEmail(e.target.value)}} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e) => {setPassword(e.target.value)}} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleClick}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to ="/login">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );



  
}

export default Signup