import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/png/002-document.png';
import LeftArrowIcon from '../assets/png/002-document.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return ( 
    <ArrowBackIosIcon onClick={() => scrollPrev()}className='Right-arrow' />
    
   );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return ( 
    <Typography onClick={() => scrollNext()}className=' Left-arrow'>
      <img src={ RightArrowIcon} alt=' Right-arrow' />
    </Typography>
   );
};



const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
   <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
     {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
      ))}
   </ScrollMenu>
  )
}

export default HorizontalScrollBar