import React, { useState }  from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercices from '../components/Exercices'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const [bodyPart, setBodyPart]= useState('all');
  const [exercises, setExercises]= useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
      <Exercices
       setExercises={setExercises} 
       exercises={exercises}
      bodyPart={bodyPart}
       />
    </Box> 
  )
}

export default Home