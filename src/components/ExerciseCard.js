import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

      <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#fff', background: '#1560BD', fontSize: '12px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#3F3F4E', fontSize: '12px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>

      <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '22px', xs: '18px' } }} mt="11px" textTransform="capitalize">
      {exercise.name}
    </Typography>
    </Link> 
  )
}

export default ExerciseCard