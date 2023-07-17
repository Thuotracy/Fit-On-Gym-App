import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#002366" fontWeight="600" fontSize="26px">JUST DO IT!</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Hustle for that muscle
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        The pain you feel today will be the strength you feel tomorrow.
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#1560BD', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#002366" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ width: '600px', height: '820px'}}/>
  </Box>
);

export default HeroBanner;