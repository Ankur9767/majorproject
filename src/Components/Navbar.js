import { Drawer, Box, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

 const  Navbar = () => {
    const[isDrawerOpen, setDrawerOpen]=useState(false);

  return (
    <div>        
        <IconButton
         size='large'
         edge='large'
         color='inherit'
         aria-label='logo'
         onClick={()=> setDrawerOpen(true)}
         >
            <MenuIcon />
         </IconButton>

         <Drawer
         anchor='left'
         open={isDrawerOpen}
         onClose={()=> setDrawerOpen(false)}
         >
            <Box p={2} width='250px' textAlign='center'  role='presentation'>
                <Typography borderColor={'darkseagreen'} variant='h6' component='div'>
                    side panel
                </Typography>
        
            </Box>
         </Drawer>
     



    </div>
  )
}

export default Navbar;
