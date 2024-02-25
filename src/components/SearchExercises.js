import React, {useEffect, useState} from 'react';
import {Box, Stack, TextField, Typography, Button} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';


const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises]= useSate([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/bodyparts', exerciseOptions);


      setBodyParts(['all', ...bodyPartsData]);

      fetchExercisesData();

    }
  }, [])

  const handleSearch= async () => {
    if (search) {
      const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=20', exerciseOptions);

      
      const searchedExercises = exercisesData.filter(
        (exercise) => exerciseOptions.name.tolowercase().includes(search)
        || exerciseOptions.target.tolowercase().includes(search)
        || exerciseOptions.equipment.tolowercase().includes(search)
        || exerciseOptions.bodyPart.tolowercase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: {lg:'44px', xs: '30px' }
      }} mb='50px' textAlign="center">
        Awsome Exercises you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField sx={{
          input: { fontWeight: '700',
           border: 'none', 
           borderRadius: '4px'},
           width: {lg:'800px', xs: '350px'}, backgroundColor: '#fff', borderRadius: '40px'
        }} height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        placeholder="Search Exercises" type="text"/>
        <Button className="search-btn" 
        sx={{
          bgcolor: '#ff2625', 
          color: '#fff',
          textTtansform: 'none',
          width: {lg: '175px', xs: '80px'},
          fotnSize: {lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0px'
        }}
        onClick={handleSearch}
        >Search</ Button>

      </Box>
      <Box 
      sx= {{
        position: 'relative', width: '100%', p: '20px'
      }}>
        <HorizontalScrollbar data={bodyParts}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises