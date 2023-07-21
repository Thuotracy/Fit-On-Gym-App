import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px' }}/>
     </Link>
      <p style={{ position: 'relative', right: '145px', top: '20px', margin: '0 20px', color: '#1560BD', fontSize: '20px', fontWeight: '600'}}>Fit-On</p>

      {/* <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} /> */}
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '26x', xs: '18px' } }} mt="41px" textAlign="center" pb="40px">All Rights Reserved</Typography>
  </Box>
);

export default Footer;