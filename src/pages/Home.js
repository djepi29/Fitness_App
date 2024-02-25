import React, { useState }  from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercices from '../components/Exercices'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercices />
    </Box> 
  )
}

export default Home