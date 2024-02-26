import React from 'react'
import { Stack, Typogrphy } from '@mui/material';

import Icon from '../assets/png/007-exercise.png';

const BodyPart = () => {
  return (
    <Stack 
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card">
    <img src={Icon} alt="dumbbell" styles={{ width: '40px', height: '40px'}}/>
    </Stack>
  )
}

export default BodyPart