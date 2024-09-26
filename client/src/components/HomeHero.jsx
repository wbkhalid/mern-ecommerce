import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const HomeHero = () => {
    return (
        <Grid container my='2rem'>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <Typography sx={{ fontSize: { xs: '1rem', md: '2rem' }, fontWeight: 'bold' }}> Welcome to Our Store</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus pariatur reiciendis vel tempore dolorem necessitatibus
                    esse doloremque consequatur fuga sint nostrum modi soluta nulla,
                    vitae dolorum voluptate assumenda possimus libero!
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/images/hero.jpg" alt="" style={{
                        width: '80%',
                        height: 'auto',
                    }} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default HomeHero
