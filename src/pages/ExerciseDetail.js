import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';


import { exerciseOptions, fetchData } from '../utils/fetchData';


const ExerciseDetail = () => {
  return (
    <Box>
      <Details />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail