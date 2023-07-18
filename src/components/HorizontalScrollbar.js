import React from 'react'
import { Box } from '@mui/material';

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
        {data.map((item) => {
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                {item}
            </Box>
        }
        )}
    </div>
  )
}

export default HorizontalScrollbar