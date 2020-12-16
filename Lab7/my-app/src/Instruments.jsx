import React from "react";
import Alert from './Alert'
import Avatars from './Avatars'
import Instr from './Instr'
import InstrPhotos from './InstrPhotos'
import Grid from '@material-ui/core/Grid';


const Instruments = () => (
    <Grid container spacing={3} style={{justifyContent:'center', alignItems:'center', marginTop: 40}}>
        <Grid item xs={4}>
                <Avatars />
                <Alert />
                <Instr />
        </Grid>
        <Grid item xs={4}>
                <InstrPhotos />
        </Grid>  
    </Grid>
);

export default Instruments;