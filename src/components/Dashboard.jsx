import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Camera from './Camera';


export default function BasicGrid() {
  return (
    <Grid
    container
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', minWidth: "100vw", backgroundColor: "yellow" }}
  >
    <Grid item xs={12} md={4}>
      <div style={{"width": "500px", "height": "500px", "backgroundColor": "blue"}}>Image container</div>
      
      <Camera />
    </Grid>

<Grid item md={2}>
<Button  variant="contained">Chuyen doi</Button>
</Grid>

    <Grid item xs={12} md={6}>
      <div style={{"width": "500px", "height": "500px", "backgroundColor": "purple"}}>Hien thi text</div>
      
    </Grid>
  </Grid>
  );
}
