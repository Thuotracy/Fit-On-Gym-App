import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';


import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box
        sx={{
            mt: {lg: '212px', xs: '70px'},
            ml: {sm: '50px'}
        }}
        position="relative"
        p="20px"
    >

        <Typography color="#002366" fontWeight="600" fontSize="26px">
            JUST DO IT!
        </Typography>

        <Typography fontWeight="700px" sx={{fontSize: {lg: "42px", xs: "38px"}}}>
            Hustle for that muscle
        </Typography>

        <Typography fontSize="20px" lineHeight="35px" mb={3}>
            The pain you feel today, is the strength you feel tomorrow
        </Typography>

        <Button variant="contained" href="exercises">Search Exercises</Button>
        <img src={HeroBannerImage}/>
    </Box>
  )
}

export default HeroBanner