import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/png/001-love.png'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="20px 0"
      borderBottom="1px solid #E5E5E5"
    >
      <Link to ="/">
        <img src={Logo} alt="Logo" style={{
          width: '48px' , height: '48px', margin: '0 20px'
        }} />
      </Link>
      <Stack
       direction="row"
       gap="40px"
       fontSize="24px"
       alignItems="flex-end"
      >
        <Link to="/"> Home</Link>
        <a href="#excercises" style={{ textDecoration: 'none',
         color: '#3A1212',
         borderBottom: '3px solid #FF2625'
         }}>Excercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar