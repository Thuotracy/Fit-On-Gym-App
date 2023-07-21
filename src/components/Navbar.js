import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';


import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: {sm: '122px', xs:'40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none' }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px' }}/>
     </Link>
      <p style={{ position: 'relative', right: '145px', top: '20px', margin: '0 20px', color: '#1560BD', fontSize: '20px', fontWeight: '600'}}>Fit-On</p>

      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color:'#3A1212', borderBottom: '3px solid #1560BD' }}>Home</Link>
        <a href="exercises" style={{ textDecoration: 'none', color:'#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar